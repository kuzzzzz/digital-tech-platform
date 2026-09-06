'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Quiz from '../../../../components/Quiz';

export default function QuizPage() {
  const params = useParams();
  const classId = (params?.class || 'ss1').toLowerCase();
  const weekSlug = params?.week || 'week-01';
  const weekNum = parseInt(String(weekSlug).replace(/\D/g, ''), 10) || 1;

  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `/data/${classId}-week-${String(weekNum).padStart(2, '0')}.json`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setModule(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [classId, weekNum]);

  if (loading) return <p>Loading quiz…</p>;
  if (!module) {
    return (
      <div>
        <p>Quiz data not available.</p>
        <a href={`/${classId}/`} className="btn btn-secondary">Back</a>
      </div>
    );
  }

  const handleComplete = (score, total, passed) => {
    console.log('Quiz result', { score, total, passed, moduleId: module.id });
  };

  return (
    <div>
      <p className="text-muted">Week {module.week}: {module.title}</p>
      <Quiz
        questions={module.quiz || []}
        moduleId={module.id}
        classId={classId}
        onComplete={handleComplete}
      />
      <p className="mt-2">
        <a href={`/${classId}/week-${String(weekNum).padStart(2, '0')}/`} className="text-muted">
          ← Back to lesson
        </a>
      </p>
    </div>
  );
}
