'use client';

import { useState } from 'react';
import {
  log, recent, getContext, displayMode, isOnline, connectionType,
} from '../lib/pilotLog';

const DOING = [
  { id: 'reading', label: 'Reading a lesson' },
  { id: 'quiz', label: 'Doing a quiz' },
  { id: 'other', label: 'Something else' },
];

const MAX_CHARS = 300;

/**
 * "Report a problem", on every page.
 *
 * Three taps and a sentence. Anything longer than that and a 15-year-old on a
 * cracked screen closes it, and the bug goes unreported.
 *
 * Everything technical is attached automatically - which module and card they
 * were on, whether they were online, screen width, connection, and the last
 * twenty log events - because a student cannot be expected to know any of it
 * and that context is what makes the report worth having.
 *
 * The confirmation is deliberately large and slow to dismiss. A student who
 * thinks it did not send will not send another.
 */
export default function BugReport() {
  const [open, setOpen] = useState(false);
  const [doing, setDoing] = useState('');
  const [what, setWhat] = useState('');
  const [expected, setExpected] = useState('');
  const [sent, setSent] = useState(false);

  const reset = () => {
    setDoing('');
    setWhat('');
    setExpected('');
    setSent(false);
  };

  const close = () => {
    setOpen(false);
    reset();
  };

  const submit = () => {
    const ctx = getContext();
    log('bug_report', {
      doing: doing || 'unsaid',
      what: what.slice(0, MAX_CHARS),
      expected: expected.slice(0, MAX_CHARS),
      moduleId: ctx.moduleId,
      cardId: ctx.cardId,
      online: isOnline(),
      displayMode: displayMode(),
      screenWidth: typeof window !== 'undefined' && window.screen ? window.screen.width : null,
      connection: connectionType(),
      // Snapshot, not a reference: the log keeps growing and this report is
      // about the twenty events that led up to the problem.
      recentEvents: recent(20),
    });
    setSent(true);
  };

  if (!open) {
    return (
      <button type="button" className="report-button" onClick={() => setOpen(true)}>
        Report a problem
      </button>
    );
  }

  return (
    <div className="sheet-backdrop" role="dialog" aria-modal="true" aria-label="Report a problem">
      <div className="sheet">
        {sent ? (
          <div className="report-sent">
            <h2>Saved on this phone</h2>
            <p>
              Your report is saved. It has <strong>not</strong> been sent yet.
            </p>
            <p className="text-muted">
              To get it to your teacher, go to the home screen and tap
              <strong> Send my log to the teacher</strong>.
            </p>
            <button type="button" className="btn btn-block" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2>Report a problem</h2>

            <p className="mb-1"><strong>What were you doing?</strong></p>
            <div className="choice-row">
              {DOING.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`choice ${doing === d.id ? 'chosen' : ''}`}
                  onClick={() => setDoing(d.id)}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <label className="field">
              <span><strong>What went wrong?</strong></span>
              <textarea
                rows={3}
                maxLength={MAX_CHARS}
                value={what}
                onChange={(e) => setWhat(e.target.value)}
                placeholder="The page went blank when I pressed Next"
              />
              <span className="text-muted">{what.length}/{MAX_CHARS}</span>
            </label>

            <label className="field">
              <span>What did you expect? <em className="text-muted">(optional)</em></span>
              <textarea
                rows={2}
                maxLength={MAX_CHARS}
                value={expected}
                onChange={(e) => setExpected(e.target.value)}
              />
            </label>

            <p className="text-muted">
              Do not put your name in. Which lesson you were on and how your
              phone is set up get attached on their own.
            </p>

            <div className="lesson-actions">
              <button type="button" className="btn btn-secondary" onClick={close}>
                Cancel
              </button>
              <button
                type="button"
                className="btn"
                onClick={submit}
                disabled={what.trim().length < 3}
              >
                Save report
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
