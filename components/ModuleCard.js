'use client';

import Link from 'next/link';
import LockBadge from './LockBadge';
import ProgressBar from './ProgressBar';

export default function ModuleCard({
  module,
  classId,
  unlocked = true,
  unlockHint,
  opensDate,
  completion = 0,
}) {
  const href = unlocked
    ? `/${classId}/week-${String(module.week).padStart(2, '0')}/`
    : '#';

  return (
    <li>
      <Link
        href={href}
        className={`module-card ${unlocked ? '' : 'locked'}`}
        aria-disabled={!unlocked}
        onClick={(e) => {
          if (!unlocked) e.preventDefault();
        }}
      >
        <h2>
          Week {module.week}: {module.title}
          {!unlocked && <LockBadge text="Locked" />}
        </h2>
        <div className="meta">
          {module.subtopics && module.subtopics.length > 0
            ? module.subtopics.slice(0, 3).join(' · ')
            : '—'}
        </div>
        {unlocked ? (
          <ProgressBar percent={completion} />
        ) : (
          <p className="text-muted mt-1" style={{ marginBottom: 0 }}>
            {unlockHint || (opensDate ? `Opens ${opensDate}` : 'Locked')}
          </p>
        )}
      </Link>
    </li>
  );
}
