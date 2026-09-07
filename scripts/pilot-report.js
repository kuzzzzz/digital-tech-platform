/**
 * Reads the exported pilot logs and says what happened.
 *
 *   node scripts/pilot-report.js ./logs
 *
 * Five students hand over five JSON files. This prints the things worth acting
 * on before next week's lesson, and nothing else.
 *
 * The number to look at is "stopped at" - the card each phone was on when the
 * session ended. One card showing up across several devices is not five
 * students losing interest at the same moment; it is a card that does not work.
 */

const fs = require('fs');
const path = require('path');

function median(numbers) {
  if (!numbers.length) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function seconds(ms) {
  return `${(ms / 1000).toFixed(1)}s`;
}

function loadLogs(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`No such folder: ${dir}`);
    process.exit(1);
  }
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
  const logs = [];
  for (const file of files) {
    const full = path.join(dir, file);
    try {
      const parsed = JSON.parse(fs.readFileSync(full, 'utf8'));
      if (!Array.isArray(parsed.events)) {
        console.warn(`  skipped ${file}: no events array`);
        continue;
      }
      logs.push({ file, ...parsed });
    } catch (e) {
      console.warn(`  skipped ${file}: ${e.message}`);
    }
  }
  return logs;
}

/** The last card seen in each session - where that sitting actually ended. */
function stoppedAt(events) {
  const bySession = new Map();
  for (const e of events) {
    if (e.type !== 'card_view' || !e.cardId) continue;
    bySession.set(e.session, `${e.moduleId} card ${e.cardId}`);
  }
  return [...bySession.values()];
}

function perDevice(logDoc) {
  const events = logDoc.events;
  const modules = new Set();
  const cards = [];
  const quizzes = [];
  let errors = 0;
  let bugs = 0;

  for (const e of events) {
    if (e.type === 'module_open') modules.add(e.moduleId);
    if (e.type === 'card_view') cards.push(e);
    if (e.type === 'quiz_complete') quizzes.push(e);
    if (e.type === 'error') errors += 1;
    if (e.type === 'bug_report') bugs += 1;
  }

  return { modules, cards, quizzes, errors, bugs, stopped: stoppedAt(events) };
}

function main() {
  const dir = process.argv[2] || './logs';
  const logs = loadLogs(dir);

  if (!logs.length) {
    console.error(`No readable logs in ${dir}`);
    process.exit(1);
  }

  const line = '='.repeat(72);
  console.log(`\n${line}\nPILOT REPORT - ${logs.length} device(s) from ${dir}\n${line}`);

  const allCards = [];
  const allStops = [];
  const allErrors = [];
  const allBugs = [];
  let cacheHits = 0;
  let networkHits = 0;

  console.log('\nPER DEVICE');
  for (const doc of logs) {
    const d = perDevice(doc);
    allCards.push(...d.cards);
    allStops.push(...d.stopped);

    for (const e of doc.events) {
      if (e.type === 'offline_hit') cacheHits += 1;
      if (e.type === 'network_hit') networkHits += 1;
      if (e.type === 'error') allErrors.push({ device: doc.device, ...e });
      if (e.type === 'bug_report') allBugs.push({ device: doc.device, ...e });
    }

    const scores = d.quizzes.map((q) => `${q.moduleId.replace(/^.*week-/, 'wk')} ${q.score}/${q.total}`);
    console.log(`\n  ${doc.device || doc.file}`);
    console.log(`    modules opened : ${d.modules.size}   cards viewed: ${d.cards.length}`);
    console.log(`    quizzes        : ${d.quizzes.length ? scores.join(', ') : 'none'}`);
    console.log(`    errors / bugs  : ${d.errors} / ${d.bugs}`);
    if (d.stopped.length) {
      console.log(`    ended sessions on: ${d.stopped.slice(-3).join(' | ')}`);
    }
  }

  // Where the sittings ended, counted across devices.
  console.log('\nSTOPPED AT  (the same card across devices is a broken card)');
  const stopCounts = new Map();
  for (const s of allStops) stopCounts.set(s, (stopCounts.get(s) || 0) + 1);
  const ranked = [...stopCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  if (!ranked.length) console.log('  no card views recorded');
  for (const [card, n] of ranked) {
    console.log(`  ${String(n).padStart(3)}x  ${card}`);
  }

  console.log('\nDWELL PER CARD');
  const dwellByCard = new Map();
  for (const c of allCards) {
    const key = `${c.moduleId} card ${c.cardId}`;
    if (!dwellByCard.has(key)) dwellByCard.set(key, []);
    dwellByCard.get(key).push(c.dwell_ms || 0);
  }
  const allDwell = allCards.map((c) => c.dwell_ms || 0);
  console.log(`  median across every card view: ${seconds(median(allDwell))}`);
  const slowest = [...dwellByCard.entries()]
    .map(([card, list]) => [card, median(list), list.length])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  console.log('  slowest 5 by median dwell:');
  for (const [card, med, n] of slowest) {
    console.log(`    ${seconds(med).padStart(8)}  ${card}  (${n} view${n === 1 ? '' : 's'})`);
  }

  console.log('\nSERVICE WORKER');
  const totalHits = cacheHits + networkHits;
  console.log(`  page loads from cache : ${cacheHits}`);
  console.log(`  page loads from network: ${networkHits}`);
  if (totalHits === 0) {
    console.log('  nothing recorded - either the worker never registered, or');
    console.log('  no page was loaded after it took control. Worth checking.');
  } else {
    console.log(`  ${Math.round((cacheHits / totalHits) * 100)}% served offline`);
  }

  console.log('\nERRORS');
  if (!allErrors.length) console.log('  none');
  const byMessage = new Map();
  for (const e of allErrors) {
    const key = e.message || 'unknown';
    if (!byMessage.has(key)) byMessage.set(key, []);
    byMessage.get(key).push(e);
  }
  for (const [message, list] of byMessage) {
    console.log(`  ${list.length}x  ${message}`);
    console.log(`        on ${[...new Set(list.map((e) => e.moduleId || '-'))].join(', ')}`);
  }

  console.log('\nBUG REPORTS');
  if (!allBugs.length) console.log('  none');
  for (const b of allBugs) {
    console.log(`\n  [${b.t.slice(0, 16).replace('T', ' ')}] ${b.device}`);
    console.log(`    doing    : ${b.doing}`);
    console.log(`    on       : ${b.moduleId || '-'}${b.cardId ? ` card ${b.cardId}` : ''}`);
    console.log(`    online   : ${b.online}   ${b.displayMode || ''} ${b.screenWidth || '?'}px ${b.connection || ''}`);
    console.log(`    problem  : ${b.what}`);
    if (b.expected) console.log(`    expected : ${b.expected}`);
  }

  console.log('\nDEVICES SEEN');
  for (const doc of logs) {
    const open = doc.events.find((e) => e.type === 'app_open') || {};
    console.log(
      `  ${doc.device || doc.file}  ${doc.screenWidth || open.screenWidth || '?'}px ` +
      `dpr${doc.pixelRatio || open.pixelRatio || '?'}  ` +
      `${doc.connection || open.connection || 'connection unknown'}  ` +
      `${doc.displayMode || open.displayMode || '?'}`
    );
  }

  console.log(`\n${line}\n`);
}

if (require.main === module) main();

module.exports = { median, stoppedAt, loadLogs };
