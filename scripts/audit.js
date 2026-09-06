/**
 * Checks the parsed content against measured targets, and fails the build if
 * teacher material has leaked into anything a student can see.
 *
 * Targets are counted from the real term files, not estimated. A drop means
 * a parser change silently ate content - which is easy to do and hard to
 * notice, because a failing extractor returns [] rather than throwing.
 *
 *   npm run audit
 */

const fs = require('fs');
const path = require('path');
const { parseWeekMarkdown } = require('../lib/parser');

const root = path.join(__dirname, '..');
const CLASSES = ['ss1', 'ss2'];

const TARGETS = {
  modules: 22,      // 11 per class - weeks 11-13 are ONE combined module
  cards: 117,
  quiz: 80,
  theory: 103,
  practicals: 16,
  assignments: 16,
};
const MIN_RESOURCES = 100;   // measured ~149; must never be 0

// Strings that only ever belong in teacher material. If one of these reaches
// a student-visible field, a marking key is on a student's screen.
const LEAK_MARKERS = ['Worked answers', 'Marking key', '**Answers:'];

// Checked against the exported HTML. Wider than LEAK_MARKERS because the
// build can leak whole sections, not just the phrases inside them.
const HTML_LEAK_MARKERS = [
  'Worked answers',
  'Marking key',
  'MARKING GUIDE',
  'Instructions to the Teacher',
  "TEACHER'S HELPER",
];

function loadModules() {
  const modules = [];
  for (const cls of CLASSES) {
    const dir = path.join(root, 'content', cls);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
      const md = fs.readFileSync(path.join(dir, file), 'utf8');
      modules.push({ file: `${cls}/${file}`, ...parseWeekMarkdown(md, cls) });
    }
  }
  return modules;
}

function countCards(m) {
  return (m.periods || []).reduce((n, p) => n + (p.cards || []).length, 0);
}

/** Every student-visible string in a module, tagged with where it came from. */
function studentVisible(m) {
  const out = [];
  for (const p of m.periods || []) {
    for (const c of p.cards || []) {
      out.push([`card ${c.id}`, c.body || '']);
    }
  }
  for (const t of m.theoryQuestions || []) out.push(['theory', t.text || '']);
  if (m.practical) out.push(['practical', m.practical.body || '']);
  // practical.answerKey and card.answerKey are teacher fields by definition,
  // so they are deliberately NOT in this list - but nothing else may hold
  // their content.
  if (m.assignment) out.push(['assignment', m.assignment]);
  for (const s of m.extraSections || []) {
    if (!s.teacherOnly) out.push([`extra "${s.heading}"`, s.body || '']);
  }
  return out;
}

function findLeaks(modules) {
  const leaks = [];
  for (const m of modules) {
    for (const [where, text] of studentVisible(m)) {
      for (const marker of LEAK_MARKERS) {
        if (text.includes(marker)) {
          leaks.push({ id: m.id, where, marker });
        }
      }
    }
  }
  return leaks;
}

function unmappedAnswers(modules) {
  // A question whose answer never appeared in the "**Answers:**" line is
  // scored against option (a) by default, which marks students wrong in
  // silence. Count them rather than trusting the quiz total alone.
  let n = 0;
  for (const m of modules) {
    for (const q of m.quiz || []) {
      if (q.answer === null || q.answer === undefined) n += 1;
    }
  }
  return n;
}

/**
 * Scan the exported HTML, not just the parsed modules.
 *
 * The parser-level check passed while out/ss1/index.html carried the whole
 * midterm paper and its marking guide: the class list handed full modules to
 * a client component, and Next serialises client props into the page. Clean
 * JSON is not the same as a clean build.
 */
function auditBuiltHtml() {
  const outDir = path.join(root, 'out');
  if (!fs.existsSync(outDir)) {
    return { skipped: true, leaks: [] };
  }
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) files.push(full);
    }
  })(outDir);

  const leaks = [];
  for (const file of files) {
    const rel = path.relative(outDir, file);
    // /teacher is where this material is supposed to be.
    if (rel.split(path.sep)[0] === 'teacher') continue;
    const html = fs.readFileSync(file, 'utf8');
    for (const marker of HTML_LEAK_MARKERS) {
      if (html.includes(marker)) leaks.push({ file: rel, marker });
    }
  }
  return { skipped: false, leaks, files: files.length };
}

function main() {
  const modules = loadModules();
  if (!modules.length) {
    console.error('No week files found. Run: npm run split');
    process.exit(1);
  }

  const w = (s, n) => String(s == null ? '' : s).padEnd(n);
  const r = (s, n) => String(s == null ? '' : s).padStart(n);
  console.log(
    w('module', 14) + w('kind', 11) + r('subs', 5) + r('cards', 6) +
    r('quiz', 5) + r('thry', 5) + r('prac', 5) + r('asgn', 5) +
    r('res', 5) + r('extra', 6) + '  title'
  );
  console.log('-'.repeat(101));

  const totals = { cards: 0, quiz: 0, theory: 0, practicals: 0, assignments: 0,
                   resources: 0, extras: 0 };
  for (const m of modules) {
    const cards = countCards(m);
    const quiz = (m.quiz || []).length;
    const theory = (m.theoryQuestions || []).length;
    const prac = m.practical ? 1 : 0;
    const asgn = m.assignment ? 1 : 0;
    const res = (m.resources || []).length;
    const extra = (m.extraSections || []).length;

    totals.cards += cards;
    totals.quiz += quiz;
    totals.theory += theory;
    totals.practicals += prac;
    totals.assignments += asgn;
    totals.resources += res;
    totals.extras += extra;

    const span = m.weekTo ? `${m.week}-${m.weekTo}` : String(m.week);
    console.log(
      w(`${m.class} wk ${span}`, 14) + w(m.kind || '(none)', 11) +
      r((m.subtopics || []).length, 5) + r(cards, 6) + r(quiz, 5) +
      r(theory, 5) + r(prac, 5) + r(asgn, 5) + r(res, 5) + r(extra, 6) +
      '  ' + String(m.title || '').slice(0, 34)
    );
  }

  const failures = [];
  const check = (label, actual, expected) => {
    const ok = actual === expected;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${w(label, 14)} ${r(actual, 5)} / ${expected}`);
    if (!ok) failures.push(`${label}: got ${actual}, expected ${expected}`);
  };

  console.log('\ntotals');
  check('modules', modules.length, TARGETS.modules);
  check('lesson cards', totals.cards, TARGETS.cards);
  check('quiz', totals.quiz, TARGETS.quiz);
  check('theory', totals.theory, TARGETS.theory);
  check('practicals', totals.practicals, TARGETS.practicals);
  check('assignments', totals.assignments, TARGETS.assignments);

  const resOk = totals.resources >= MIN_RESOURCES;
  console.log(`  ${resOk ? 'ok  ' : 'FAIL'}  ${w('resources', 14)} ${r(totals.resources, 5)} / >=${MIN_RESOURCES}`);
  if (!resOk) failures.push(`resources: got ${totals.resources}, expected >=${MIN_RESOURCES}`);

  const unmapped = unmappedAnswers(modules);
  console.log(`  ${unmapped === 0 ? 'ok  ' : 'FAIL'}  ${w('unmapped ans', 14)} ${r(unmapped, 5)} / 0`);
  if (unmapped !== 0) failures.push(`unmapped quiz answers: ${unmapped}`);

  // A teaching week lists several sub-topics separated by U+00B7. One giant
  // string means the separator was missed; zero means the line was.
  const badSubs = modules.filter(
    (m) => m.kind === 'lesson' && (m.subtopics || []).length < 2
  );
  console.log(`  ${badSubs.length === 0 ? 'ok  ' : 'FAIL'}  ${w('subtopics', 14)} ` +
              `${r(badSubs.length, 5)} lesson weeks with <2`);
  for (const m of badSubs) console.log(`          ${m.id} has ${(m.subtopics || []).length}`);
  if (badSubs.length) failures.push(`${badSubs.length} lesson week(s) with <2 subtopics`);

  // Weeks 5, 7 and 11-13 have no lesson cards by design. They must still
  // carry their papers and projects, or they render as empty modules - which
  // is exactly how the midterm content went missing before.
  const emptyModules = modules.filter(
    (m) => countCards(m) === 0 && (m.extraSections || []).length === 0
  );
  console.log(`  ${emptyModules.length === 0 ? 'ok  ' : 'FAIL'}  ${w('empty modules', 14)} ` +
              `${r(emptyModules.length, 5)} / 0`);
  for (const m of emptyModules) console.log(`          ${m.id} "${m.title}" has no cards and no sections`);
  if (emptyModules.length) failures.push(`${emptyModules.length} module(s) with no content at all`);

  const leaks = findLeaks(modules);
  console.log(`\n  ${leaks.length === 0 ? 'ok  ' : 'FAIL'}  teacher content in student fields: ${leaks.length}`);
  for (const l of leaks.slice(0, 12)) {
    console.log(`          ${l.id}  ${l.where}  contains ${JSON.stringify(l.marker)}`);
  }
  if (leaks.length > 12) console.log(`          ... and ${leaks.length - 12} more`);
  if (leaks.length) failures.push(`${leaks.length} teacher-content leak(s)`);

  const built = auditBuiltHtml();
  if (built.skipped) {
    console.log('\n  --    built HTML not checked (no out/ - run npm run build)');
  } else {
    const ok = built.leaks.length === 0;
    console.log(`\n  ${ok ? 'ok  ' : 'FAIL'}  teacher content in built HTML: ` +
                `${built.leaks.length} across ${built.files} pages`);
    for (const l of built.leaks.slice(0, 12)) {
      console.log(`          ${l.file}  contains ${JSON.stringify(l.marker)}`);
    }
    if (built.leaks.length > 12) console.log(`          ... and ${built.leaks.length - 12} more`);
    if (!ok) failures.push(`${built.leaks.length} teacher-content leak(s) in built HTML`);
  }

  if (failures.length) {
    console.error(`\n${failures.length} check(s) failed:`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log('\naudit clean');
}

main();
