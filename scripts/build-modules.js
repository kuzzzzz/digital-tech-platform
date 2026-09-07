/**
 * Writes the term out as machine-readable JSON, one file per module.
 *
 * Nothing in the app reads these. Every page renders its content at build time
 * from the markdown, so they exist as the data copy that travels on the flash
 * drive alongside the pages - useful for a search feature, a different
 * renderer, or anything else later.
 *
 * Student modules only. There used to be a full set under public/data/teacher/
 * as well, written on the theory that the teacher page would fetch them. It
 * never did - /teacher is a server component and reads the markdown directly -
 * so those 22 files shipped in the export, linked from nowhere, and were the
 * only place in the whole build where the marking guides appeared at all. A
 * copy nothing reads cannot be worth a marking guide on a public URL.
 */
const fs = require('fs');
const path = require('path');
const { getAllModules, getClasses } = require('../lib/content');
const { toStudentModule } = require('../lib/studentView');

const outDir = path.join(__dirname, '../public/data');
const staleTeacherDir = path.join(outDir, 'teacher');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Left behind by an earlier build. Without this it would keep being copied
// into the export by anyone who does not start from a clean checkout.
if (fs.existsSync(staleTeacherDir)) {
  fs.rmSync(staleTeacherDir, { recursive: true, force: true });
  console.log('[build-modules] Removed the stale public/data/teacher/ copies');
}

let students = 0;
for (const classId of getClasses()) {
  for (const mod of getAllModules(classId)) {
    fs.writeFileSync(
      path.join(outDir, `${mod.id}.json`),
      JSON.stringify(toStudentModule(mod), null, 2),
      'utf8'
    );
    students += 1;
  }
}

console.log(`[build-modules] Wrote ${students} student modules to public/data/`);
