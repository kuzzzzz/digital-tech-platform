'use client';

/**
 * One lesson card.
 *
 * Takes body HTML, not markdown. The conversion used to happen right here, on
 * the phone, on every render - and it only understood bold and inline code, so
 * the SS2 week 8 HTML lesson (a fenced block containing a real <html> document)
 * was injected into the page as markup and rendered as an empty card. It is now
 * lib/markdown.js, run once at build time.
 */
export default function LessonCard({ card, index, total, quizHref, onPrev, onNext }) {
  if (!card) return null;

  const last = index >= total - 1;

  return (
    <div>
      <div className="lesson-nav">
        <span>Card {index + 1} of {total}</span>
        <span className="text-muted">{card.id}</span>
      </div>

      <article className="lesson-card">
        <h2>{card.heading}</h2>
        <div className="body" dangerouslySetInnerHTML={{ __html: card.bodyHtml }} />
      </article>

      <div className="lesson-actions">
        <button type="button" className="btn btn-secondary" onClick={onPrev} disabled={index === 0}>
          Previous
        </button>
        {last ? (
          // A link, not a button: the export has to survive with no JS router,
          // and scripts/relative-paths.js can only fix an href it can see.
          <a className="btn" href={quizHref}>Finish &amp; Quiz</a>
        ) : (
          <button type="button" className="btn" onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  );
}
