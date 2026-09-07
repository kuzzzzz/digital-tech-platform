/**
 * Writes the term out as machine-readable JSON, one file per module.
 *
 * Nothing in the app reads these. Every page renders its content at build time
 * from the markdown, so they exist as the data copy that travels on the flash
 * drive alongside the pages - useful for a search feature, a different
 * renderer, or anything else later.
 *
 * A student build writes student modules only. A teacher build also writes the
 * full ones to public/data/teacher/, for the teacher's own copy.
 *
 * These used to be written unconditionally, on the theory that the teacher page
 * would fetch them. It never did - /teacher is a server component and reads the
 * markdown directly - so 22 files shipped in every export, linked from nowhere,
 * and were the only place in the whole build where the marking guides appeared
 * at all. A copy nothing reads cannot be worth a marking guide on a public URL.
 */
const fs = require('fs');
const path = require('path');
const { getAllModules, getClasses } = require('../lib/content');
const { toStudentModule } = require('../lib/studentView');
const { IS_TEACHER, TARGET } = require('../lib/buildTarget');

const outDir = path.join(__dirname, '../public/data');
const staleTeacherDir = path.join(outDir, 'teacher');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Cleared every time, teacher build or not. public/ is copied into the export
// wholesale, so a set left behind by a previous teacher build would be picked
// up by the next student build without anything having asked for it.
if (fs.existsSync(staleTeacherDir)) {
  fs.rmSync(staleTeacherDir, { recursive: true, force: true });
}
if (IS_TEACHER) fs.mkdirSync(staleTeacherDir, { recursive: true });

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

    if (IS_TEACHER) {
      fs.writeFileSync(
        path.join(staleTeacherDir, `${mod.id}.json`),
        JSON.stringify(mod, null, 2),
        'utf8'
      );
      teachers += 1;
    }
  }
}

console.log(
  `[build-modules] ${TARGET} build: ${students} student modules` +
  (IS_TEACHER ? `, ${teachers} full modules to public/data/teacher/` : '')
);
