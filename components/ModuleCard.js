'use client';

import LockBadge from './LockBadge';
import ProgressBar from './ProgressBar';

/**
 * One row in the module list.
 *
 * Takes a card summary from moduleMeta.toCardSummary, NOT a module. This is
 * a client component, so every prop is serialised into the page HTML that
 * students download - handing it the module put the midterm paper and its
 * marking guide into view-source on the class list.
 *
 * Three states, and they must look different:
 *  - a lesson, with cards and a progress bar
 *  - a non-lesson week (test, break, revision), which has no cards and so
 *    gets no progress bar - a bar stuck at 0% reads as broken
 *  - locked, which stays visible and greyed rather than hidden, because a
 *    module you can see but not open is a reason to come back
 *
 * A plain <a>, not next/link. Link prefetches each target's RSC payload from an
 * absolute URL, which from a flash drive means nineteen failed requests to the
 * root of the filesystem before the list has even finished rendering. There is
 * nothing to prefetch in an export that is already fully cached anyway.
 */
export default function ModuleCard({
  card,
  classId,
  unlocked = true,
  unlockHint,
  opensDate,
  completion = 0,
}) {
  // An assessment week is sat on paper in class. There is nothing behind the
  // link for a student, so it is not a link.
  const isLink = unlocked && card.openable;
  const href = isLink
    ? `/${classId}/week-${String(card.week).padStart(2, '0')}/`
    : '#';

  const inner = (
    <>
      <h2>
        {card.label}: {card.title}
        {card.badge && <span className="kind-badge">{card.badge}</span>}
        {!unlocked && <LockBadge text="Locked" />}
      </h2>
      <div className="meta">{card.summary}</div>

      {!unlocked ? (
        <p className="text-muted mt-1" style={{ marginBottom: 0 }}>
          {unlockHint || (opensDate ? `Opens ${opensDate}` : 'Locked')}
        </p>
      ) : card.kind === 'lesson' ? (
        <ProgressBar percent={completion} />
      ) : null}
    </>
  );

  return (
    <li>
      {isLink ? (
        <a href={href} className="module-card">
          {inner}
        </a>
      ) : (
        <div
          className={`module-card ${unlocked ? 'no-content' : 'locked'}`}
          aria-disabled="true"
        >
          {inner}
        </div>
      )}
    </li>
  );
}
