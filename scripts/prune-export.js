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
 * A student build also loses the teacher route here. next build renders every
 * route in app/, so out/teacher/index.html exists whichever target is running;
 * the page itself refuses to render its notes outside a teacher build, and this
 * removes the route as well so there is nothing to open at all.
 *
 * They are build output, so this is not destructive: any build regenerates them
 * and this step removes them again.
 *
 * Run after relative-paths and before build-sw, so the precache list is
 * generated from what actually ships.
 */

const fs = require('fs');
const path = require('path');
const { IS_TEACHER, TARGET } = require('../lib/buildTarget');

const OUT = path.join(__dirname, '..', 'out');

// Add to this only for output that is genuinely unreachable. Anything a page
// links to, or the service worker caches, has to stay.
const UNREQUESTED = [/(^|\/)index\.txt$/];

// Whole directories a student build must not contain. data/teacher should
// already be absent - build-modules.js does not write it for a student target -
// but a stale copy from an earlier teacher build would be sitting in public/
// and copied straight through, so it is removed here too rather than trusted.
const TEACHER_ONLY_DIRS = [
  'teacher',
  path.join('data', 'teacher'),
  path.join('_next', 'static', 'chunks', 'app', 'teacher'),
];

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

  if (!IS_TEACHER) {
    for (const rel of TEACHER_ONLY_DIRS) {
      const dir = path.join(OUT, rel);
      if (!fs.existsSync(dir)) continue;
      for (const f of walk(dir)) {
        bytes += fs.statSync(f).size;
        count += 1;
      }
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }

  for (const file of walk(OUT)) {
    const rel = path.relative(OUT, file).split(path.sep).join('/');
    if (!UNREQUESTED.some((re) => re.test(rel))) continue;
    bytes += fs.statSync(file).size;
    fs.unlinkSync(file);
    count += 1;
  }

  console.log(
    `[prune-export] ${TARGET} build: removed ${count} file(s) nothing requests, ` +
    `${(bytes / 1024).toFixed(0)} KB`
  );
}

if (require.main === module) main();

module.exports = { UNREQUESTED, OUT };
