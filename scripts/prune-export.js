/**
 * Deletes build output that nothing requests.
 *
 * next build writes an index.txt beside every page: the RSC payload the client
 * router fetches when it navigates without a full page load. This app navigates
 * with plain anchors - next/link was removed because its prefetches all pointed
 * at the root of the filesystem - so nothing ever asks for them. That left 48
 * files and half a megabyte on the flash drive holding a third copy of the
 * lesson text, after the page itself and the module JSON.
 *
 * They are build output, so this is not destructive: any build regenerates them
 * and this step removes them again.
 *
 * Run after relative-paths and before build-sw, so the precache list is
 * generated from what actually ships.
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');

// Add to this only for output that is genuinely unreachable. Anything a page
// links to, or the service worker caches, has to stay.
const UNREQUESTED = [/(^|\/)index\.txt$/];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error('[prune-export] No out/ - run next build first.');
    process.exit(1);
  }

  let bytes = 0;
  let count = 0;
  for (const file of walk(OUT)) {
    const rel = path.relative(OUT, file).split(path.sep).join('/');
    if (!UNREQUESTED.some((re) => re.test(rel))) continue;
    bytes += fs.statSync(file).size;
    fs.unlinkSync(file);
    count += 1;
  }

  console.log(
    `[prune-export] Removed ${count} unrequested file(s), ` +
    `${(bytes / 1024).toFixed(0)} KB`
  );
}

if (require.main === module) main();

module.exports = { UNREQUESTED, OUT };
