/**
 * Parses a single week markdown file into the MODULE JSON structure.
 * Handles the exact format specified for Digital Technologies lessons.
 */

function extractTitle(md) {
  const match = md.match(/^#\s+WEEK\s+(\d+)\s*[-–—]\s*(.+)$/im);
  if (match) {
    return { week: parseInt(match[1], 10), title: match[2].trim() };
  }
  const h1 = md.match(/^#\s+(.+)$/m);
  return { week: 0, title: h1 ? h1[1].trim() : 'Untitled' };
}

function extractSubtopics(md) {
  const match = md.match(/\*\*Sub-topics?:\*\*\s*(.+)$/im);
  if (!match) return [];
  return match[1]
    .split(/\s*[.•;]\s*|\s+\d+\.\s*/)
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
  const lines = section.split(/\n/);
  let current = '';
  for (const line of lines) {
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

function extractPeriods(md) {
  const periods = [];
  const periodRe = /##\s+PERIOD\s+(\d+)(?:\s*\([^)]*\))?\s*\n([\s\S]*?)(?=\n##\s+(?:PERIOD|EVALUATION|TEACHER|RESOURCE|ASSIGNMENT)|$)/gi;
  let match;
  while ((match = periodRe.exec(md)) !== null) {
    const n = parseInt(match[1], 10);
    const body = match[2];
    const cards = [];
    const cardRe = /###\s+(\d+\.\d+)\s+(.+?)\n([\s\S]*?)(?=\n###\s+\d+\.\d+|\n##\s+|$)/g;
    let cardMatch;
    while ((cardMatch = cardRe.exec(body)) !== null) {
      cards.push({
        id: cardMatch[1].trim(),
        heading: cardMatch[2].trim(),
        body: cardMatch[3].trim(),
      });
    }
    periods.push({ n, cards });
  }
  return periods;
}

function extractQuiz(md) {
  const quiz = [];
  const objSection = extractSection(md, 'EVALUATION[^\\n]*');
  if (!objSection) return quiz;

  const aMatch = objSection.match(
    /###\s*A\.?\s*Objective Questions[^\n]*\n([\s\S]*?)(?=\n###\s*B\.|$)/i
  );
  if (!aMatch) return quiz;

  const questionsBlock = aMatch[1];
  const answersMatch = questionsBlock.match(/\*\*Answers?:\*\*\s*(.+)$/im);
  const answerMap = {};
  if (answersMatch) {
    const pairs = answersMatch[1].match(/(\d+)\s*\(\s*([a-dA-D])\s*\)/g) || [];
    pairs.forEach((p) => {
      const m = p.match(/(\d+)\s*\(\s*([a-dA-D])\s*\)/);
      if (m) {
        answerMap[parseInt(m[1], 10)] = m[2].toLowerCase().charCodeAt(0) - 97;
      }
    });
  }

  const qRe = /(\d+)\.\s+([^\n]+(?:\n(?!\s*\d+\.|\s*\*\*Answers)[^\n]+)*)/g;
  let qMatch;
  while ((qMatch = qRe.exec(questionsBlock)) !== null) {
    const num = parseInt(qMatch[1], 10);
    let textBlock = qMatch[2].trim();
    const options = [];
    const optRe = /\(\s*([a-dA-D])\s*\)\s*([^(]*?)(?=\(\s*[a-dA-D]\s*\)|$)/g;
    let optMatch;
    while ((optMatch = optRe.exec(textBlock)) !== null) {
      options.push(optMatch[2].trim().replace(/\s+$/, ''));
    }
    let qText = textBlock;
    const firstOpt = textBlock.search(/\(\s*[aA]\s*\)/);
    if (firstOpt !== -1) {
      qText = textBlock.slice(0, firstOpt).trim();
    }
    const cleanOptions = options.map((o) => o.replace(/\n/g, ' ').trim()).filter(Boolean);
    if (cleanOptions.length >= 2) {
      quiz.push({
        q: qText,
        options: cleanOptions.slice(0, 4),
        answer: answerMap[num] !== undefined ? answerMap[num] : 0,
        explanation: '',
      });
    }
  }
  return quiz;
}

function extractTheoryQuestions(md) {
  const questions = [];
  const evalSection = extractSection(md, 'EVALUATION[^\\n]*');
  if (!evalSection) return questions;
  const bMatch = evalSection.match(
    /###\s*B\.?\s*Theory Questions[^\n]*\n([\s\S]*?)(?=\n###\s*C\.|$)/i
  );
  if (!bMatch) return questions;
  const block = bMatch[1];
  const itemRe = /(\d+)\.\s+([\s\S]*?)\*\*\((\d+)\s*marks?\)\*\*/gi;
  let m;
  while ((m = itemRe.exec(block)) !== null) {
    questions.push({ text: m[2].trim(), marks: parseInt(m[3], 10) });
  }
  if (questions.length === 0) {
    const simpleRe = /(\d+)\.\s+(.+?)(?=\n\d+\.|$)/gs;
    while ((m = simpleRe.exec(block)) !== null) {
      questions.push({ text: m[2].trim(), marks: 0 });
    }
  }
  return questions;
}

function extractResources(md) {
  const section = extractSection(md, 'RESOURCE MATERIALS[^\\n]*');
  if (!section) return [];
  const resources = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRe.exec(section)) !== null) {
    resources.push({ label: m[1], url: m[2] });
  }
  const urlRe = /^(https?:\/\/\S+)/gm;
  while ((m = urlRe.exec(section)) !== null) {
    resources.push({ label: m[1], url: m[1] });
  }
  return resources;
}

function parseWeekMarkdown(markdown, classId = 'ss1') {
  const { week, title } = extractTitle(markdown);
  const classLabel = classId.toUpperCase();
  return {
    id: `${classId}-week-${String(week).padStart(2, '0')}`,
    class: classLabel,
    week,
    title,
    subtopics: extractSubtopics(markdown),
    objectives: extractNumberedList(markdown, 'Behavioural Objectives'),
    entryBehaviour: extractSection(markdown, 'Entry Behaviour'),
    materials: extractSection(markdown, 'Instructional Materials'),
    periods: extractPeriods(markdown),
    quiz: extractQuiz(markdown),
    theoryQuestions: extractTheoryQuestions(markdown),
    teacherNotes: extractSection(markdown, "TEACHER'?S? HELPER NOTES[^\\n]*"),
    resources: extractResources(markdown),
    assignment: extractSection(markdown, 'ASSIGNMENT'),
  };
}

module.exports = {
  parseWeekMarkdown,
  extractTitle,
  extractSubtopics,
  extractPeriods,
  extractQuiz,
  extractTheoryQuestions,
};
