'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import LessonCard from '../../../components/LessonCard';

export default function WeekLessonPage() {
  const params = useParams();
  const router = useRouter();
  const classId = (params?.class || 'ss1').toLowerCase();
  const weekSlug = params?.week || 'week-01';
  const weekNum = parseInt(String(weekSlug).replace(/\D/g, ''), 10) || 1;

  const [module, setModule] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `/data/${classId}-week-${String(weekNum).padStart(2, '0')}.json`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('Module data not found. Run the build script.');
        return r.json();
      })
      .then((data) => {
        setModule(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [classId, weekNum]);

  if (loading) return <p>Loading lesson…</p>;

  if (error || !module) {
    return (
      <div>
        <p>Could not load week {weekNum}.</p>
        <p className="text-muted">{error}</p>
        <a href={`/${classId}/`} className="btn btn-secondary">Back to modules</a>
      </div>
    );
  }

  const allCards = (module.periods || []).flatMap((p) => p.cards || []);
  const total = allCards.length;
  const current = allCards[cardIndex];

  const handlePrev = () => setCardIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCardIndex((i) => Math.min(total - 1, i + 1));
  const handleComplete = () => {
    router.push(`/${classId}/week-${String(weekNum).padStart(2, '0')}/quiz/`);
  };

  if (total === 0) {
    return (
      <div>
        <h2>Week {module.week}: {module.title}</h2>
        <p>This week has no lesson cards (assessment or break week).</p>
        <a href={`/${classId}/week-${String(weekNum).padStart(2, '0')}/quiz/`} className="btn">Go to Evaluation</a>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>
        Week {module.week}: {module.title}
      </h2>
      <LessonCard
        card={current}
        index={cardIndex}
        total={total}
        onPrev={handlePrev}
        onNext={handleNext}
        onComplete={handleComplete}
      />
      <p className="mt-2">
        <a href={`/${classId}/`} className="text-muted">← Back to modules</a>
      </p>
    </div>
  );
}
