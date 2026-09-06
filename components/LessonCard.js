'use client';

export default function LessonCard({
  card,
  index,
  total,
  onPrev,
  onNext,
  onComplete,
}) {
  if (!card) return null;

  const bodyHtml = card.body
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');

  return (
    <div>
      <div className="lesson-nav">
        <span>Card {index + 1} of {total}</span>
        <span className="text-muted">{card.id}</span>
      </div>

      <article className="lesson-card">
        <h2>{card.heading}</h2>
        <div className="body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </article>

      <div className="lesson-actions">
        <button type="button" className="btn btn-secondary" onClick={onPrev} disabled={index === 0}>
          Previous
        </button>
        {index < total - 1 ? (
          <button type="button" className="btn" onClick={onNext}>Next</button>
        ) : (
          <button type="button" className="btn" onClick={onComplete}>Finish & Quiz</button>
        )}
      </div>
    </div>
  );
}
