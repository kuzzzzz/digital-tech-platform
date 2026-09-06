const path = require('path');
const { splitTermFile } = require('../lib/splitter');

const root = path.join(__dirname, '..');

const sources = [
  { src: path.join(root, 'content/raw/ss1-term.md'), dest: path.join(root, 'content/ss1') },
  { src: path.join(root, 'content/raw/ss2-term.md'), dest: path.join(root, 'content/ss2') },
];

console.log('[split-content] Checking for term files...');

let any = false;
for (const { src, dest } of sources) {
  const written = splitTermFile(src, dest);
  if (written.length) {
    any = true;
    console.log(`[split-content] ${path.basename(src)} → ${written.length} week files`);
  }
}

if (!any) {
  console.log('[split-content] No raw term files found (content/raw/*-term.md). Using existing per-week files.');
}
