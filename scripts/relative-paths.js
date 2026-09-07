/**
 * Rewrites absolute paths in the export to paths relative to each file.
 *
 * Next emits every reference as "/_next/...", "/manifest.json", "/ss1/". Over
 * HTTP that is fine. From a flash drive or file:// the leading slash means the
 * root of the filesystem, so nothing loads at all.
 *
 * One fixed assetPrefix cannot fix this, because the pages sit at four
 * different depths:
 *
 *   out/index.html                      depth 0   ./
 *   out/ss1/index.html                  depth 1   ../
 *   out/ss1/week-01/index.html          depth 2   ../../
 *   out/ss1/week-01/quiz/index.html     depth 3   ../../../
 *
 * So the prefix is computed per file from how deep it sits.
 *
 * There are three separate places a path hides, and the first version of this
 * script only found the first:
 *
 *   1. HTML attributes            src="/_next/..."  href="/ss1/"
 *   2. quoted strings in scripts  the RSC flight payload pushed into
 *                                 self.__next_f carries its own copy of the
 *                                 stylesheet URL, and React re-applies it on
 *                                 hydration, so the page loaded its CSS from
 *                                 the filesystem root and rendered unstyled
 *   3. webpack's own base path    baked into the runtime chunk as p="/_next/",
 *                                 and used for anything loaded after the first
 *                                 paint
 *
 * Links are left in Next's own directory form - "../ss1/", not
 * "../ss1/index.html". A browser reading file:// cannot follow those, because
 * it does not serve directory indexes, but that is the flash drive's problem
 * and scripts/build-usb.js solves it in a separate copy. Rewriting them here
 * broke the hosted site: every class link 404'd, because "/ss1/index.html" is
 * not a route the host serves. One export cannot satisfy both, and pretending
 * it could is what shipped the bug.
 *
 * Run after next build. Idempotent: rewritten paths start with "." and no
 * longer match.
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');

// index.txt is the RSC payload twin of each page. Nothing fetches it now that
// the app navigates with plain anchors, but leaving absolute paths in a shipped
// file invites someone to trust them later.
const REWRITABLE_EXTENSIONS = /\.(html|txt)$/;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** "../../" for a file two directories below out/. */
function prefixFor(file) {
  const depth = path.relative(OUT, path.dirname(file)).split(path.sep)
    .filter(Boolean).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

/**
 * A quoted string that is nothing but an absolute path.
 *
 * Matched by shape rather than against a list of known folders, because the
 * list was wrong the first time: it was read from the top level of out/, and
 * /icons/icon-192.png survived every pass because public/icons does not exist
 * yet, so "icons" was not in the list.
 *
 * Shape means: a leading slash, then path characters, ending in a slash or a
 * file extension. Lesson prose has spaces in it and an external link starts
 * with its scheme, so neither can match. The empty alternative catches a bare
 * "/", which is the home link. The trailing group is the backslash of an
 * escaped \" inside a JS string literal; it belongs to the closing quote and
 * is put back untouched.
 */
const ABSOLUTE_PATH =
  /"\/([A-Za-z0-9_.-]+(?:\/[A-Za-z0-9_.-]+)*(?:\/|\.[a-z0-9]{2,5})|)(\\?)"/g;

/** A path with "index.html" added when it names a directory that has one. */
function rewriteFile(file) {
  const prefix = prefixFor(file);
  const before = fs.readFileSync(file, 'utf8');
  let changed = 0;

  // 1. HTML attributes.
  let after = before.replace(
    /(\s(?:src|href)=)"\/([^"]*)"/g,
    (m, attr, rest) => {
      changed += 1;
      return `${attr}"${prefix}${rest}"`;
    }
  );

  // 2. Quoted strings inside scripts and RSC payloads. The stylesheet URL is
  //    pushed into self.__next_f as well as being a <link>, and React reapplies
  //    it on hydration - so a page with only its attributes fixed still went
  //    looking for its CSS at the root of the filesystem and rendered unstyled.
  after = after.replace(ABSOLUTE_PATH, (m, rest, escape) => {
    changed += 1;
    return `"${prefix}${rest}${escape}"`;
  });

  // 3. The service worker registration, which is an inline script rather than
  //    an attribute. It has to reach the sw.js at the root of the export -
  //    "./sw.js" from a week page would look for one inside that directory.
  after = after.replace(/register\((['"])\/sw\.js\1\)/g, (m, quote) => {
    changed += 1;
    return `register(${quote}${prefix}sw.js${quote})`;
  });

  if (changed) fs.writeFileSync(file, after, 'utf8');
  return changed;
}

/** The one place a path is compiled into JavaScript rather than written out. */
const BAKED_PUBLIC_PATH = '"/_next/"';

/**
 * Makes the webpack runtime work out its own base path instead of carrying an
 * absolute one.
 *
 * The runtime uses this for every chunk it loads after the first paint. Nothing
 * in the app does that today - there are no dynamic imports, so every chunk a
 * page needs is a script tag in its own HTML - but the first `dynamic()` import
 * anyone adds would fetch from the root of the filesystem and fail only on the
 * flash drive, months later, with no obvious cause.
 *
 * document.currentScript.src is the resolved URL of this chunk while it runs.
 * Dropping the filename leaves the directory it sits in; stepping back up to
 * _next/ from there gives the base. That is what webpack's own 'auto' setting
 * generates, done here because setting it in next.config.js breaks the page
 * script tags (see the note there).
 */
function rewriteRuntimeChunk() {
  const chunkDir = path.join(OUT, '_next', 'static', 'chunks');
  if (!fs.existsSync(chunkDir)) return 0;

  const runtime = fs.readdirSync(chunkDir)
    .filter((f) => /^webpack-.*\.js$/.test(f))
    .map((f) => path.join(chunkDir, f));

  let changed = 0;
  for (const file of runtime) {
    const before = fs.readFileSync(file, 'utf8');
    if (!before.includes(BAKED_PUBLIC_PATH)) continue;
    // "../../" - worked out from where the chunk actually sits, not assumed.
    const up = `${path.relative(path.dirname(file), path.join(OUT, '_next'))
      .split(path.sep).join('/')}/`;
    const expr =
      `((document.currentScript&&document.currentScript.src||"")` +
      `.replace(/[^/]*$/,"")+${JSON.stringify(up)})`;
    fs.writeFileSync(file, before.split(BAKED_PUBLIC_PATH).join(expr), 'utf8');
    changed += 1;
  }

  if (changed === 0) {
    console.error(
      `[relative-paths] Could not find ${BAKED_PUBLIC_PATH} in the webpack ` +
      'runtime chunk. Next changed how it bakes the base path - fix this ' +
      'before shipping, or chunk loading breaks from a flash drive.'
    );
    process.exit(1);
  }
  return changed;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error('[relative-paths] No out/ - run next build first.');
    process.exit(1);
  }
  const files = walk(OUT).filter((f) => REWRITABLE_EXTENSIONS.test(f));
  let total = 0;
  for (const file of files) total += rewriteFile(file);
  const runtimes = rewriteRuntimeChunk();
  console.log(
    `[relative-paths] Rewrote ${total} absolute refs across ${files.length} ` +
    `files, and the base path in ${runtimes} runtime chunk(s)`
  );
}

if (require.main === module) main();

module.exports = {
  prefixFor, rewriteFile, rewriteRuntimeChunk, ABSOLUTE_PATH, OUT,
};
