const fs = require('fs');
const path = require('path');
const { getAllModules, getClasses } = require('../lib/content');

const outDir = path.join(__dirname, '../public/data');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let count = 0;
for (const classId of getClasses()) {
  const modules = getAllModules(classId);
  for (const mod of modules) {
    const filename = `${mod.id}.json`;
    const outPath = path.join(outDir, filename);
    fs.writeFileSync(outPath, JSON.stringify(mod, null, 2), 'utf8');
    count += 1;
  }
}

console.log(`[build-modules] Wrote ${count} module JSON files to public/data/`);
