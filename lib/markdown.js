/**
 * Markdown to HTML, run at BUILD time.
 *
 * The brief says no markdown parser ships to the phone, so this runs on the
 * build machine and the pages carry finished HTML. That is also what makes the
 * export work from a flash drive: there is nothing left to fetch or parse.
 *
 * It handles the subset the lesson notes actually use - fenced code, pipe
 * tables, blockquotes, lists, headings, bold, italic, inline code and links.
 * Not a general markdown implementation, and it does not need to be.
 *
 * Everything is HTML-escaped first. That is not defensive tidiness: SS2 week 8
 * teaches HTML, so card 8.4 is a fenced block containing a real <html> document
 * and the tables around it are full of <head>, <meta>, <br>. Injected raw into
 * the page, that lesson rendered as an empty card - the browser parsed the
 * example as markup instead of showing it.
 */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };

function escapeHtml(text) {
  return String(text).replace(/[&<>]/g, (c) => ESCAPES[c]);
}

/**
 * Bold, italic, code and links inside one line of text.
 *
 * Code spans are pulled out before the emphasis passes and put back after, so
 * a `**bold**` example in backticks stays literal instead of turning into a
 * <strong>. The notes are full of backticked markup, so this matters.
 */
function inline(text) {
  const codes = [];
  let s = String(text).replace(/`([^`]+)`/g, (m, code) => {
    codes.push(`<code>${escapeHtml(code)}</code>`);
    return `@@CODE${codes.length - 1}@@`;
  });

  s = escapeHtml(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Single asterisks only where they are not part of a ** pair.
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

  return s.replace(/@@CODE(\d+)@@/g, (m, n) => codes[Number(n)]);
}

/** A pipe row split into cells, with the leading and trailing pipes dropped. */
function cells(row) {
  return row.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

const FENCE = /^\s*```/;
const TABLE_RULE = /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/;
const HEADING = /^\s*(#{1,6})\s+(.*)$/;
const QUOTE = /^\s*>\s?(.*)$/;
const BULLET = /^\s*[-*+]\s+(.*)$/;
const NUMBER = /^\s*\d+[.)]\s+(.*)$/;

/** True if the line opens a block, so a paragraph has to stop before it. */
function startsBlock(line) {
  return (
    !line.trim() ||
    FENCE.test(line) ||
    HEADING.test(line) ||
    QUOTE.test(line) ||
    BULLET.test(line) ||
    NUMBER.test(line) ||
    /^\s*\|/.test(line)
  );
}

function renderBody(md) {
  const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    // Fenced code. The opening fence may name a language (```html); it is kept
    // as a class so a stylesheet can use it later, but nothing depends on it.
    if (FENCE.test(line)) {
      const lang = line.trim().replace(/^```/, '').trim();
      const body = [];
      i += 1;
      while (i < lines.length && !FENCE.test(lines[i])) {
        body.push(lines[i]);
        i += 1;
      }
      i += 1; // closing fence, or the end of the card if it was never closed
      const cls = lang ? ` class="lang-${escapeHtml(lang)}"` : '';
      out.push(`<pre><code${cls}>${escapeHtml(body.join('\n'))}</code></pre>`);
      continue;
    }

    // Pipe table: a header row, then a |---|---| rule, then the body rows.
    // Without the rule on the next line it is only a paragraph with pipes in it.
    if (/^\s*\|/.test(line) && TABLE_RULE.test(lines[i + 1] || '')) {
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(cells(lines[i]));
        i += 1;
      }
      const th = head.map((c) => `<th>${inline(c)}</th>`).join('');
      const tb = rows
        .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
        .join('');
      out.push(
        `<div class="table-scroll"><table><thead><tr>${th}</tr></thead>` +
        `<tbody>${tb}</tbody></table></div>`
      );
      continue;
    }

    if (QUOTE.test(line)) {
      const body = [];
      while (i < lines.length && QUOTE.test(lines[i])) {
        body.push(lines[i].match(QUOTE)[1]);
        i += 1;
      }
      out.push(`<blockquote>${inline(body.join(' ')).trim()}</blockquote>`);
      continue;
    }

    if (HEADING.test(line)) {
      const [, hashes, text] = line.match(HEADING);
      // The card's own title is already an <h2>, so a body heading starts below
      // it: # becomes h3, ## becomes h4, and so on down to h6.
      const level = Math.min(6, hashes.length + 2);
      out.push(`<h${level}>${inline(text)}</h${level}>`);
      i += 1;
      continue;
    }

    if (BULLET.test(line) || NUMBER.test(line)) {
      const ordered = NUMBER.test(line);
      const re = ordered ? NUMBER : BULLET;
      const items = [];
      while (i < lines.length && re.test(lines[i])) {
        items.push(`<li>${inline(lines[i].match(re)[1])}</li>`);
        i += 1;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.join('')}</${tag}>`);
      continue;
    }

    // Paragraph: everything up to a blank line or the start of another block.
    // Single newlines inside it become <br/>, which is how the notes lay out
    // short lines that belong together.
    const para = [];
    while (i < lines.length && !startsBlock(lines[i])) {
      para.push(lines[i].trim());
      i += 1;
    }
    out.push(`<p>${para.map(inline).join('<br/>')}</p>`);
  }

  return out.join('');
}

module.exports = { renderBody, inline, escapeHtml };
