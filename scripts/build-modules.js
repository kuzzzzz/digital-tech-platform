/**
 * Writes the module JSON the app fetches at runtime.
 *
 * Two sets, and the split is the point: public/data holds student modules
 * with every teacher field stripped, and public/data/teacher holds the full
 * ones. Writing a single set put teacherNotes, marking guides and mark
 * schemes into 22 files that any student could fetch directly.
 */
const fs = require('fs');
const path = require('path');
const { getAllModules, getClasses } = require('../lib/content');
const { toStudentModule } = require('../lib/studentView');

const outDir = path.join(__dirname, '../public/data');
const teacherDir = path.join(outDir, 'teacher');

for (const dir of [outDir, teacherDir]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

let students = 0;
let teachers = 0;
for (const classId of getClasses()) {
  for (const mod of getAllModules(classId)) {
    fs.writeFileSync(
      path.join(outDir, `${mod.id}.json`),
      JSON.stringify(toStudentModule(mod), null, 2),
      'utf8'
    );
    students += 1;
    fs.writeFileSync(
      path.join(teacherDir, `${mod.id}.json`),
      JSON.stringify(mod, null, 2),
      'utf8'
    );
    teachers += 1;
  }
}

console.log(
  `[build-modules] Wrote ${students} student modules to public/data/ ` +
  `and ${teachers} full modules to public/data/teacher/`
);
