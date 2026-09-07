'use client';

import { useEffect, useRef, useState } from 'react';
import LessonCard from './LessonCard';
import { log, setContext } from '../lib/pilotLog';
import { isUnlocked } from '../lib/schedule';
import { getClassProgress } from '../lib/progress';

/**
 * Walks a student through one week's cards, one at a time.
 *
 * All the cards arrive as finished HTML from the server component - this only
 * owns which one is showing. Keeping the state here and the content there is
 * what lets the page work with no network at all: every card is already in the
 * document, so Next and Previous are just a re-render.
 */
export default function LessonDeck({ heading, cards, quizHref, backHref, moduleId, classId, week }) {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  // When the current card was first shown. Dwell is measured on the way out,
  // because that is the only moment the number is known.
  const shownAt = useRef(Date.now());
  const shownIndex = useRef(0);

  useEffect(() => {
    log('module_open', { moduleId, classId, week, cards: total });

    // What the unlock rule WOULD say. Gating is not enforced yet - every module
    // opens - so this records which rule let a student in without changing who
    // gets in, which is not something to start doing mid-pilot.
    try {
      const status = isUnlocked(classId, week, getClassProgress(classId));
      log('unlock', {
        moduleId,
        reason: status.reason,
        enforced: false,
      });
    } catch (e) {
      // A week with no release date. Not worth failing a lesson over.
    }
  }, [moduleId, classId, week, total]);

  // Close off the card being left, whether that is a tap on Next, a tap on
  // Back, or the phone being locked. pagehide fires where unload does not, and
  // is the one that works on iOS.
  useEffect(() => {
    const leave = () => {
      const card = cards[shownIndex.current];
      if (!card) return;
      log('card_view', {
        moduleId,
        cardId: card.id,
        dwell_ms: Date.now() - shownAt.current,
      });
    };

    window.addEventListener('pagehide', leave);
    return () => {
      window.removeEventListener('pagehide', leave);
      leave();
    };
    // Deliberately only on mount/unmount: the per-card close-off is handled by
    // the move() calls below, and re-running this on every index change would
    // file each card twice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setContext(moduleId, cards[index] ? cards[index].id : null);
  }, [moduleId, cards, index]);

  /** Record the card being left, then show the next one. */
  const move = (next) => {
    const leaving = cards[shownIndex.current];
    if (leaving && next !== index) {
      log('card_view', {
        moduleId,
        cardId: leaving.id,
        dwell_ms: Date.now() - shownAt.current,
      });
    }
    shownAt.current = Date.now();
    shownIndex.current = next;
    setIndex(next);
  };

  return (
    <div>
      <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>{heading}</h2>

      <LessonCard
        card={cards[index]}
        index={index}
        total={total}
        quizHref={quizHref}
        onPrev={() => move(Math.max(0, index - 1))}
        onNext={() => move(Math.min(total - 1, index + 1))}
      />

      <p className="mt-2">
        <a href={backHref} className="text-muted">&larr; Back to modules</a>
      </p>
    </div>
  );
}
