/**
 * Writes the service worker's precache list from what the build actually
 * produced.
 *
 * The hand-written list covered five entries - the shell and two class
 * pages - so "works offline" meant the menu worked and every lesson was a
 * blank screen. The whole point of the design is that one visit on the
 * school wifi leaves the entire term readable at home with no data.
 *
 * Generated rather than maintained by hand: a hardcoded list goes stale the
 * moment a chunk hash changes, and it fails silently, because cache.addAll
 * rejecting just means nothing was cached.
 *
 * Run after next build and after relative-paths.
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const SW = path.join(OUT, 'sw.js');

// Precached on install. Everything else is cached as it is fetched.
const PRECACHE_EXTENSIONS = /\.(html|json|js|css|webmanifest|png|svg|woff2?)$/;

// Big and rarely needed offline. index.txt is Next's RSC payload duplicate of
// each page, and the teacher copies are not for students' phones.
const SKIP = [
  /(^|\/)index\.txt$/,
  /^data\/teacher\//,
  /^teacher\//,
  /^404/,
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function precacheList() {
  return walk(OUT)
    .map((f) => path.relative(OUT, f).split(path.sep).join('/'))
    .filter((rel) => rel !== 'sw.js')
    .filter((rel) => PRECACHE_EXTENSIONS.test(rel))
    .filter((rel) => !SKIP.some((re) => re.test(rel)))
    // Directory index pages are requested as "ss1/", not "ss1/index.html",
    // so both spellings have to be in the cache to match a navigation.
    .flatMap((rel) =>
      rel.endsWith('/index.html')
        ? [rel, rel.replace(/index\.html$/, '')]
        : rel === 'index.html'
          ? [rel, './']
          : [rel]
    )
    .map((rel) => (rel.startsWith('./') ? rel : `./${rel}`))
    .sort();
}

function main() {
  if (!fs.existsSync(SW)) {
    console.error('[build-sw] No out/sw.js - run next build first.');
    process.exit(1);
  }
  const list = precacheList();
  const source = fs.readFileSync(SW, 'utf8');
  const replaced = source.replace(
    /const PRECACHE = \[[\s\S]*?\];/,
    `const PRECACHE = ${JSON.stringify(list, null, 2)};`
  );
  if (replaced === source) {
    console.error('[build-sw] Could not find the PRECACHE list in out/sw.js.');
    process.exit(1);
  }
  fs.writeFileSync(SW, replaced, 'utf8');

  const bytes = walk(OUT)
    .filter((f) => list.includes(`./${path.relative(OUT, f).split(path.sep).join('/')}`))
    .reduce((n, f) => n + fs.statSync(f).size, 0);
  const modules = list.filter((p) => /^\.\/data\/.*\.json$/.test(p)).length;
  console.log(
    `[build-sw] Precaching ${list.length} files (${modules} module JSON, ` +
    `${(bytes / 1024 / 1024).toFixed(2)} MB)`
  );
}

if (require.main === module) main();

module.exports = { precacheList, OUT, SW };
