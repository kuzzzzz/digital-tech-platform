'use client';

import { useState } from 'react';
import { clearAll, readLog, deviceId } from '../lib/pilotLog';

export default function ClearData() {
  const [confirming, setConfirming] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="quiz-result pass">
        <p>Everything stored by this app on this phone has been erased.</p>
        <a href="/" className="btn">Back to the start</a>
      </div>
    );
  }

  return (
    <div>
      {!confirming ? (
        <button type="button" className="btn btn-block" onClick={() => setConfirming(true)}>
          Clear my data
        </button>
      ) : (
        <div className="sheet-inline">
          <p>
            This erases your progress, the usage log, and the anonymous id for
            this phone. It cannot be undone, and anything you have not sent to
            your teacher will be gone.
          </p>
          <div className="lesson-actions">
            <button type="button" className="btn btn-secondary" onClick={() => setConfirming(false)}>
              Keep it
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => { clearAll(); setDone(true); }}
            >
              Erase everything
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
