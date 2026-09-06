/**
 * Build-time content loader.
 * Reads all week markdown files and parses them into module JSON.
 * Used by pages via generateStaticParams and getStatic-like helpers.
 */

const fs = require('fs');
const path = require('path');
const { parseWeekMarkdown } = require('./parser');

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function getAvailableWeeks(classId) {
  const dir = path.join(CONTENT_ROOT, classId.toLowerCase());
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^week-\d+\.md$/.test(f))
    .map((f) => parseInt(f.match(/week-(\d+)/)[1], 10))
    .sort((a, b) => a - b);
}

function getModule(classId, week) {
  const weekNum = typeof week === 'string' ? parseInt(week, 10) : week;
  const filename = `week-${String(weekNum).padStart(2, '0')}.md`;
  const filePath = path.join(CONTENT_ROOT, classId.toLowerCase(), filename);
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, 'utf8');
  return parseWeekMarkdown(md, classId.toLowerCase());
}

function getAllModules(classId) {
  const weeks = getAvailableWeeks(classId);
  return weeks.map((w) => getModule(classId, w)).filter(Boolean);
}

function getClasses() {
  return ['ss1', 'ss2'];
}

module.exports = {
  getAvailableWeeks,
  getModule,
  getAllModules,
  getClasses,
  CONTENT_ROOT,
};
