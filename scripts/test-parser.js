const fs = require('fs');
const path = require('path');
const { parseWeekMarkdown } = require('../lib/parser');

const samples = [
  path.join(__dirname, '../content/ss1/week-01.md'),
  path.join(__dirname, '../content/ss1/week-04.md'),
];

for (const file of samples) {
  if (!fs.existsSync(file)) {
    console.log('Missing:', file);
    continue;
  }
  const md = fs.readFileSync(file, 'utf8');
  const result = parseWeekMarkdown(md, 'ss1');
  console.log('\n==========', path.basename(file), '==========');
  console.log('id:', result.id);
  console.log('title:', result.title);
  console.log('week:', result.week);
  console.log('subtopics:', result.subtopics);
  console.log('objectives count:', result.objectives.length);
  console.log('periods:', result.periods.map((p) => ({ n: p.n, cards: p.cards.length })));
  console.log('quiz questions:', result.quiz.length);
  if (result.quiz.length) {
    console.log('  first quiz:', JSON.stringify(result.quiz[0], null, 2));
  }
  console.log('theory questions:', result.theoryQuestions.length);
  console.log('resources:', result.resources.length);
  console.log('has teacherNotes:', !!result.teacherNotes);
  console.log('has assignment:', !!result.assignment);
}

console.log('\nParser test finished.');
