/**
 * Parses one week markdown file into the MODULE JSON structure.
 *
 * Two rules run through everything here:
 *
 *  - A failing extractor returns [] or null, it does not throw. Assessment
 *    and break weeks genuinely have no PERIOD sections, so "missing" is
 *    normal. That is also why scripts/audit.js counts everything: a silent
 *    [] and a correct [] look identical from the outside.
 *
 *  - Teacher material never reaches a student field. Test papers, marking
 *    keys and "**Answers:**" lines are lifted onto teacherNotes, answerKey,
 *    or extraSections with teacherOnly:true.
 */

// Sections every other extractor already claims. Anything else becomes an
// extraSection - which is where the midterm papers and break projects live.
const CLAIMED_SECTIONS = [
  /^Behavioural Objectives/i,
  /^Entry Behaviour/i,
  /^Instructional Materials/i,
  /^PERIOD\s+\d+/i,
  /^EVALUATION/i,
  /^TEACHER'?S? HELPER NOTES/i,
  /^RESOURCE MATERIALS/i,
  /^ASSIGNMENT/i,
];

// An extraSection with one of these headings is a test paper or teacher
// instruction and must never render on a student screen.
const TEACHER_ONLY_HEADINGS =
  /MIDTERM TEST|EXAMINATION|MARKING|Instructions? to the Teacher/i;

function extractTitle(md) {
  // "WEEK 4 - COMPUTER HARDWARE" and "WEEKS 11-13 - REVISION AND
  // EXAMINATIONS" in one pass: the optional (\d+) group only matches when a
  // dash is followed by digits, so a normal title cannot be read as a range.
  const range = md.match(
    /^#\s+WEEKS?\s+(\d+)(?:\s*[–—-]\s*(\d+))?\s*[–—-]\s*(.+)$/im
  );
  if (range) {
    return {
      week: parseInt(range[1], 10),
      weekTo: range[2] ? parseInt(range[2], 10) : null,
      title: range[3].trim(),
    };
  }
  const h1 = md.match(/^#\s+(.+)$/m);
  return { week: 0, weekTo: null, title: h1 ? h1[1].trim() : 'Untitled' };
}

/** "lesson" | "assessment" | "break" | "revision", from the week title. */
function classifyKind(title) {
  const t = String(title || '');
  // Revision first: "REVISION AND EXAMINATIONS" is both, and revision content
  // is never locked, so the softer classification has to win.
  if (/REVISION/i.test(t)) return 'revision';
  if (/BREAK/i.test(t)) return 'break';
  if (/TEST|EXAM/i.test(t)) return 'assessment';
  return 'lesson';
}

function extractSubtopics(md) {
  const match = md.match(/\*\*Sub-topics?:\*\*\s*(.+)$/im);
  if (!match) return [];
  // The separator is U+00B7 MIDDLE DOT, not a full stop. Splitting on "."
  // shatters abbreviations ("SS 1.", "e.g.") into nonsense.
  return match[1]
    .split(/\s*[·•;]\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function extractSection(md, headingPattern) {
  const re = new RegExp(
    `##\\s+${headingPattern}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`,
    'i'
  );
  const match = md.match(re);
  return match ? match[1].trim() : '';
}

function extractNumberedList(md, headingPattern) {
  const section = extractSection(md, headingPattern);
  if (!section) return [];
  const items = [];
  let current = '';
  for (const line of section.split(/\n/)) {
    const numMatch = line.match(/^\s*(\d+)[.)]\s+(.+)$/);
    if (numMatch) {
      if (current) items.push(current.trim());
      current = numMatch[2];
    } else if (current && line.trim()) {
      current += ' ' + line.trim();
    }
  }
  if (current) items.push(current.trim());
  return items;
}

// Two shapes of teacher answer appear inside otherwise student-visible
// bodies. "**Answers:** 1(b) 2(c)" is one line. "**Worked answers for the
// teacher:**" opens a block that runs to the end of the section.
const ANSWER_LINE = /^\s*\*\*Answers?:\*\*/i;
const ANSWER_BLOCK = /^\s*\*\*(Worked answers|Marking key|Answers? for the teacher)/i;

/** Split teacher answers out of a body. Returns [cleanBody, answerKey|null]. */
function liftAnswerKey(body) {
  const keep = [];
  const keys = [];
  let inBlock = false;
  for (const line of String(body || '').split('\n')) {
    if (ANSWER_BLOCK.test(line)) inBlock = true;
    if (inBlock || ANSWER_LINE.test(line)) keys.push(line);
    else keep.push(line);
  }
  return [
    keep.join('\n').replace(/\n{3,}/g, '\n\n').trim(),
    keys.length ? keys.join('\n').trim() : null,
  ];
}

function extractPeriods(md) {
  const periods = [];
  // "(45 minutes)" is often followed by more text - SS2 week 1 has
  // "## PERIOD 1 (45 minutes) - Rapid Review". Demanding end-of-line right
  // after the bracket returned zero cards for that whole week.
  const periodRe =
    /##\s+PERIOD\s+(\d+)(?:\s*\([^)]*\))?[^\n]*\n([\s\S]*?)(?=\n##\s+|$)/gi;
  let match;
  while ((match = periodRe.exec(md)) !== null) {
    const n = parseInt(match[1], 10);
    const cards = [];
    const cardRe = /###\s+(\d+\.\d+)\s+(.+?)\n([\s\S]*?)(?=\n###\s+\d+\.\d+|\n##\s+|$)/g;
    let cardMatch;
    while ((cardMatch = cardRe.exec(match[2])) !== null) {
      // SS2 week 1 keeps a diagnostic answer key inside a lesson card. It
      // comes off the body and onto a teacher-only field.
      const [body, answerKey] = liftAnswerKey(cardMatch[3]);
      cards.push({
        id: cardMatch[1].trim(),
        heading: cardMatch[2].trim(),
        body,
        answerKey,
      });
    }
    periods.push({ n, cards });
  }
  return periods;
}

/** Split "(a) x (b) y" on the MARKERS, so option text may contain brackets. */
function splitOptions(text) {
  const markers = [];
  const markerRe = /\(\s*([a-dA-D])\s*\)/g;
  let m;
  while ((m = markerRe.exec(text)) !== null) {
    markers.push({ letter: m[1].toLowerCase(), at: m.index, end: markerRe.lastIndex });
  }
  // Options must run a, b, c, d in order. Anything else is a bracket inside
  // the question text, not an option marker.
  const start = markers.findIndex((x) => x.letter === 'a');
  if (start === -1) return { question: text.trim(), options: [] };
  const wanted = ['a', 'b', 'c', 'd'];
  const chosen = [];
  for (const letter of wanted) {
    const found = markers.find((x, i) => i >= start && x.letter === letter);
    if (!found) break;
    if (chosen.length && found.at < chosen[chosen.length - 1].end) break;
    chosen.push(found);
  }
  if (chosen.length < 2) return { question: text.trim(), options: [] };

  const options = chosen.map((mk, i) => {
    const to = i + 1 < chosen.length ? chosen[i + 1].at : text.length;
    // Slicing between markers is what lets an option read "dot (.)" - the
    // old matcher used [^(] and stopped dead at that inner bracket.
    return text.slice(mk.end, to).replace(/\s+/g, ' ').trim();
  });
  return { question: text.slice(0, chosen[0].at).trim(), options };
}

function extractQuiz(md) {
  const quiz = [];
  const evalSection = extractSection(md, 'EVALUATION[^\\n]*');
  if (!evalSection) return quiz;

  const aMatch = evalSection.match(
    /###\s*A\.?\s*Objective Questions[^\n]*\n([\s\S]*?)(?=\n###\s*B\.|$)/i
  );
  if (!aMatch) return quiz;
  const block = aMatch[1];

  // "**Answers:** 1(b) 2(c) ..." maps question number -> option index.
  const answersMatch = block.match(/\*\*Answers?:\*\*\s*(.+)$/im);
  const answerMap = {};
  if (answersMatch) {
    for (const pair of answersMatch[1].match(/(\d+)\s*\(\s*([a-dA-D])\s*\)/g) || []) {
      const m = pair.match(/(\d+)\s*\(\s*([a-dA-D])\s*\)/);
      answerMap[parseInt(m[1], 10)] = m[2].toLowerCase().charCodeAt(0) - 97;
    }
  }

  // Walked line by line rather than matched with one regex. A question runs
  // from its "N." line until the next one, and its options usually sit on
  // the following line - which a /m regex ending in $ silently cuts off,
  // because under /m the $ is end-of-LINE, not end-of-block.
  const items = [];
  let current = null;
  for (const line of block.split('\n')) {
    if (ANSWER_LINE.test(line)) break;          // the key ends the questions
    const start = line.match(/^\s*(\d+)\.\s+(.*)$/);
    if (start) {
      if (current) items.push(current);
      current = { num: parseInt(start[1], 10), text: start[2] };
    } else if (current && line.trim()) {
      current.text += ' ' + line.trim();
    }
  }
  if (current) items.push(current);

  for (const item of items) {
    const num = item.num;
    const { question, options } = splitOptions(item.text.trim());
    if (options.length < 2) continue;
    quiz.push({
      q: question.replace(/\s+/g, ' ').trim(),
      options,
      // null, not 0, when the answers line never mentioned this question.
      // Defaulting to (a) marks students wrong in silence; null lets the
      // audit see it.
      answer: answerMap[num] !== undefined ? answerMap[num] : null,
      explanation: '',
    });
  }
  return quiz;
}

function extractTheoryQuestions(md) {
  const questions = [];
  const evalSection = extractSection(md, 'EVALUATION[^\\n]*');
  if (!evalSection) return questions;
  // Real headings include "B. Theory Questions", "B. Theory / Calculation
  // Questions" and "B. Theory and Calculation Questions". Match on B. plus
  // "Theory" and take whatever else is on the line.
  const bMatch = evalSection.match(
    /###\s*B\.?\s*[^\n]*Theory[^\n]*\n([\s\S]*?)(?=\n###\s*C\.|$)/i
  );
  if (!bMatch) return questions;
  const block = bMatch[1];

  const itemRe = /(\d+)\.\s+([\s\S]*?)\*\*\((\d+)\s*marks?\)\*\*/gi;
  let m;
  while ((m = itemRe.exec(block)) !== null) {
    questions.push({ text: m[2].trim(), marks: parseInt(m[3], 10) });
  }
  if (questions.length === 0) {
    const simpleRe = /(\d+)\.\s+([\s\S]+?)(?=\n\s*\d+\.\s|$)/g;
    while ((m = simpleRe.exec(block)) !== null) {
      questions.push({ text: m[2].trim(), marks: 0 });
    }
  }
  return questions;
}

/** The "### C." block - practical, class activity or drill, wording varies. */
function extractPractical(md) {
  const evalSection = extractSection(md, 'EVALUATION[^\\n]*');
  if (!evalSection) return null;
  const cMatch = evalSection.match(/###\s*C\.?\s*([^\n]*)\n([\s\S]*?)(?=\n###\s|$)/i);
  if (!cMatch) return null;
  // SS2 week 4 keeps "**Worked answers for the teacher:**" at the foot of
  // this block. Without lifting it, a marking key renders on the practical.
  const [body, answerKey] = liftAnswerKey(cMatch[2]);
  if (!body) return null;
  return { heading: cMatch[1].trim(), body, answerKey };
}

function extractResources(md) {
  const section = extractSection(md, 'RESOURCE MATERIALS[^\\n]*');
  if (!section) return [];
  const resources = [];
  for (const raw of section.split('\n')) {
    const line = raw.trim();
    if (!/^[-*]\s+/.test(line)) continue;
    const item = line.replace(/^[-*]\s+/, '');

    // Markdown link first, then a backticked bare domain - the notes mostly
    // use the latter: **GCFGlobal - "Computer Basics"**: `edu.gcfglobal.org`
    let url = null;
    const link = item.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const ticked = item.match(/`([^`]+)`/);
    const bare = item.match(/https?:\/\/\S+/);
    if (link) {
      url = link[2];
    } else if (ticked && /^[\w.-]+\.[a-z]{2,}(\/\S*)?$/i.test(ticked[1].trim())) {
      const domain = ticked[1].trim();
      url = /^https?:\/\//i.test(domain) ? domain : `https://${domain}`;
    } else if (bare) {
      url = bare[0];
    }

    const label = item
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')   // link text only
      .replace(/`[^`]*`/g, '')                    // drop the ticked url
      .replace(/\*\*/g, '')
      .replace(/\s*:\s*$/, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[.:]$/, '');
    // Items with no URL are real - physical aids, textbooks, wall charts.
    // They stay in the list with url:null so the teacher still sees them.
    if (label) resources.push({ label, url });
  }
  return resources;
}

/** Every "## " section no other extractor claims. */
function extractExtraSections(md) {
  const out = [];
  // (?![\s\S]) rather than $ for the end case: this regex needs /m so that ^
  // anchors to a line, but under /m the $ means end-of-LINE, which truncated
  // every section body to its first line and dropped the ones whose first
  // line was blank - taking the midterm papers with them.
  const re = /^##\s+([^\n]+)\n([\s\S]*?)(?=\n##\s+|(?![\s\S]))/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    const heading = m[1].trim();
    if (CLAIMED_SECTIONS.some((p) => p.test(heading))) continue;
    const body = m[2].trim();
    if (!body) continue;
    out.push({
      heading,
      body,
      teacherOnly: TEACHER_ONLY_HEADINGS.test(heading),
    });
  }
  return out;
}

function parseWeekMarkdown(markdown, classId = 'ss1') {
  const { week, weekTo, title } = extractTitle(markdown);
  return {
    id: `${classId}-week-${String(week).padStart(2, '0')}`,
    class: classId.toUpperCase(),
    week,
    weekTo,
    kind: classifyKind(title),
    title,
    subtopics: extractSubtopics(markdown),
    objectives: extractNumberedList(markdown, 'Behavioural Objectives'),
    entryBehaviour: extractSection(markdown, 'Entry Behaviour'),
    materials: extractSection(markdown, 'Instructional Materials'),
    periods: extractPeriods(markdown),
    quiz: extractQuiz(markdown),
    theoryQuestions: extractTheoryQuestions(markdown),
    practical: extractPractical(markdown),
    assignment: extractSection(markdown, 'ASSIGNMENT'),
    resources: extractResources(markdown),
    teacherNotes: extractSection(markdown, "TEACHER'?S? HELPER NOTES[^\\n]*"),
    extraSections: extractExtraSections(markdown),
  };
}

module.exports = {
  parseWeekMarkdown,
  extractTitle,
  classifyKind,
  extractSubtopics,
  extractPeriods,
  extractQuiz,
  splitOptions,
  extractTheoryQuestions,
  extractPractical,
  extractResources,
  extractExtraSections,
  liftAnswerKey,
};
