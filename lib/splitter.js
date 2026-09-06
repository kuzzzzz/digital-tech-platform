/**
 * Splits a large term markdown file into per-week files.
 * Splits on level-1 "# WEEK" headings.
 */

const fs = require('fs');
const path = require('path');

function splitMarkdown(markdown) {
  const text = markdown.replace(/\r\n/g, '\n');
  // WEEKS? because the last heading is a range: "# WEEKS 11-13 - REVISION AND
  // EXAMINATIONS". Demanding the singular silently swallowed that whole
  // section into week-10.md, where nothing rendered it.
  const weekHeaderRe = /^(#\s+WEEKS?\s+\d+.*)$/gim;
  const headers = [];
  let match;
  while ((match = weekHeaderRe.exec(text)) !== null) {
    headers.push({ index: match.index, header: match[1] });
  }
  if (headers.length === 0) return [];
  const parts = [];
  for (let i = 0; i < headers.length; i++) {
    const start = headers[i].index;
    const end = i + 1 < headers.length ? headers[i + 1].index : text.length;
    const content = text.slice(start, end).trim() + '\n';
    // A range heading gives both ends: "WEEKS 11-13" -> week 11, weekTo 13.
    // The file is named for the first week; the parser reads the range back
    // off the heading, so splitter and parser stay independent.
    const weekMatch = headers[i].header.match(
      /WEEKS?\s+(\d+)(?:\s*[\u2013\u2014-]\s*(\d+))?/i
    );
    const week = weekMatch ? parseInt(weekMatch[1], 10) : i + 1;
    const weekTo = weekMatch && weekMatch[2] ? parseInt(weekMatch[2], 10) : null;
    parts.push({ week, weekTo, content });
  }
  return parts;
}

function splitTermFile(sourcePath, targetDir) {
  if (!fs.existsSync(sourcePath)) {
    console.warn(`[splitter] Source not found: ${sourcePath}`);
    return [];
  }
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  const parts = splitMarkdown(markdown);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const written = [];
  for (const { week, content } of parts) {
    const filename = `week-${String(week).padStart(2, '0')}.md`;
    const outPath = path.join(targetDir, filename);
    fs.writeFileSync(outPath, content, 'utf8');
    written.push(filename);
    console.log(`[splitter] Wrote ${outPath}`);
  }
  return written;
}

module.exports = { splitMarkdown, splitTermFile };
