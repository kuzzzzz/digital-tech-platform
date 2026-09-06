'use client';

export default function ProgressBar({ percent = 0, label }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="progress-wrap">
      {label && <div className="text-muted mb-1">{label}</div>}
      <div className="progress-bar" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
        <div className="fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
