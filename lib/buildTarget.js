/**
 * Which build this is: student or teacher.
 *
 * There is no backend, so there is nothing to check a credential against. Any
 * gate on /teacher would be a check written in JavaScript that ships to the
 * phone alongside the thing it is guarding - and these students are taught to
 * read page source in SS2 week 8. A PIN would be worse than an open link,
 * because it would claim a protection that is not there.
 *
 * So the teacher material is not gated, it is not built. Two exports from one
 * tree:
 *
 *   student  -> out/          no data/teacher, no /teacher route, no header link
 *   teacher  -> out-teacher/  everything, kept on the teacher's own machine
 *
 * Read from BUILD_TARGET. Anything that is not exactly "teacher" is a student
 * build, so a typo, an empty variable or a forgotten flag all fail towards the
 * safe output rather than away from it.
 *
 * Real /teacher auth is a phase-two question, for when there is a backend to
 * answer it. Not before.
 */

const TARGET = process.env.BUILD_TARGET === 'teacher' ? 'teacher' : 'student';
const IS_TEACHER = TARGET === 'teacher';

// next build always writes to out/. The teacher build is moved to out-teacher/
// as its last step, so out/ is only ever a student build - which is what makes
// "out/ must contain no teacher material" a check the audit can simply run.
const FINAL_DIR = IS_TEACHER ? 'out-teacher' : 'out';

module.exports = { TARGET, IS_TEACHER, FINAL_DIR };
