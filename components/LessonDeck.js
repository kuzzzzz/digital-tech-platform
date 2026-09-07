'use client';

import { useState } from 'react';
import LessonCard from './LessonCard';

/**
 * Walks a student through one week's cards, one at a time.
 *
 * All the cards arrive as finished HTML from the server component - this only
 * owns which one is showing. Keeping the state here and the content there is
 * what lets the page work with no network at all: every card is already in the
 * document, so Next and Previous are just a re-render.
 */
export default function LessonDeck({ heading, cards, quizHref, backHref }) {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  return (
    <div>
      <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>{heading}</h2>

      <LessonCard
        card={cards[index]}
        index={index}
        total={total}
        quizHref={quizHref}
        onPrev={() => setIndex((i) => Math.max(0, i - 1))}
        onNext={() => setIndex((i) => Math.min(total - 1, i + 1))}
      />

      <p className="mt-2">
        <a href={backHref} className="text-muted">&larr; Back to modules</a>
      </p>
    </div>
  );
}
