/**
 * Puts the finished build where its target expects it.
 *
 *   student  -> out/ stays put, and usb/ is made alongside it
 *   teacher  -> out/ is moved to out-teacher/
 *
 * The move is what makes out/ mean one thing. next build always writes to out/
 * whichever target is running, so without it a teacher build would leave the
 * teacher copy sitting exactly where the deploy picks its files up. Moving it
 * means out/ is only ever a student build, and "out/ contains no teacher
 * material" becomes a check the audit can just run.
 *
 * A teacher build therefore leaves no out/ behind. That is deliberate: the next
 * deploy fails loudly rather than quietly shipping helper notes.
 *
 * --- the usb/ copy ---
 *
 * out/ is for the web. Its links are Next's own directory form - "../ss1/" -
 * which is what the host serves and what the browser expects.
 *
 * A browser reading file:// cannot follow those. There is no server to turn a
 * directory into its index page, so "../ss1/" from a flash drive opens a file
 * listing, or nothing. The fix is to name the file: "../ss1/index.html".
 *
 * That rewrite used to happen in out/ itself, which broke the hosted site -
 * every class link 404'd, because /ss1/index.html is not a route the host
 * serves. The two targets want different links and there is no single form that
 * satisfies both, so they get one export each. This copies out/ and rewrites
 * only the links.
 *
 * Run last, after the service worker has been written, so the copy is complete.
 */

const fs = require('fs');
const path = require('path');

const { IS_TEACHER } = require('../lib/buildTarget');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const USB = path.join(ROOT, 'usb');
const TEACHER_OUT = path.join(ROOT, 'out-teacher');

const REWRITABLE_EXTENSIONS = /\.(html|txt)$/;

// A relative link ending in "/" - the directory form. Absolute paths are gone
// by now (relative-paths.js ran first), so anything left starting with "." is
// ours to resolve.
const DIRECTORY_LINK = /(\s(?:src|href)=)"(\.[^"]*\/)"/g;
const DIRECTORY_STRING = /"(\.[^"\\]*\/)(\\?)"/g;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** "../ss1/" -> "../ss1/index.html", but only when that file is really there. */
function namedIndex(fromDir, link) {
  const target = path.resolve(fromDir, link, 'index.html');
  return target.startsWith(USB) && fs.existsSync(target)
    ? `${link}index.html`
    : link;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error('[finish-build] No out/ - run next build first.');
    process.exit(1);
  }

  if (IS_TEACHER) {
    fs.rmSync(TEACHER_OUT, { recursive: true, force: true });
    fs.renameSync(OUT, TEACHER_OUT);
    const bytes = walk(TEACHER_OUT).reduce((n, f) => n + fs.statSync(f).size, 0);
    console.log(
      `[finish-build] teacher build moved to out-teacher/ - ` +
      `${(bytes / 1024 / 1024).toFixed(1)} MB. No out/ left, by design.`
    );
    return;
  }

  fs.rmSync(USB, { recursive: true, force: true });
  fs.cpSync(OUT, USB, { recursive: true });

  let rewritten = 0;
  for (const file of walk(USB).filter((f) => REWRITABLE_EXTENSIONS.test(f))) {
    const dir = path.dirname(file);
    const before = fs.readFileSync(file, 'utf8');

    let after = before.replace(DIRECTORY_LINK, (m, attr, link) => {
      const named = namedIndex(dir, link);
      if (named !== link) rewritten += 1;
      return `${attr}"${named}"`;
    });

    // The same links live a second time inside the RSC payload, and React
    // reapplies them on hydration.
    after = after.replace(DIRECTORY_STRING, (m, link, escape) => {
      const named = namedIndex(dir, link);
      if (named !== link) rewritten += 1;
      return `"${named}${escape}"`;
    });

    if (after !== before) fs.writeFileSync(file, after, 'utf8');
  }

  const bytes = walk(USB).reduce((n, f) => n + fs.statSync(f).size, 0);
  console.log(
    `[finish-build] student build: out/ for the web, usb/ for the drive - ` +
    `${rewritten} links named, ${(bytes / 1024 / 1024).toFixed(1)} MB`
  );
}

if (require.main === module) main();

module.exports = { USB, OUT, TEACHER_OUT, namedIndex };
