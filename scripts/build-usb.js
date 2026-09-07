/**
 * Makes the flash-drive copy of the export, in usb/.
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

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const USB = path.join(ROOT, 'usb');

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
    console.error('[build-usb] No out/ - run next build first.');
    process.exit(1);
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
    `[build-usb] Wrote usb/ - ${rewritten} links named, ` +
    `${(bytes / 1024 / 1024).toFixed(1)} MB`
  );
}

if (require.main === module) main();

module.exports = { USB, OUT, namedIndex };
