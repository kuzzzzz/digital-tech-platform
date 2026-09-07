'use client';

import { useEffect, useState } from 'react';
import { hasSeenNotice, markNoticeSeen } from '../lib/pilotLog';

/**
 * Shown once, the first time the app is opened.
 *
 * Plain English, because the readers are 15 and this is the only place they are
 * told what the app records. It says what is kept, where it stays, that nothing
 * leaves the phone unless they send it, and how to wipe it.
 */
export default function ConsentNotice() {
  const [show, setShow] = useState(false);

  // Rendered only after mount: the answer lives in localStorage, which the
  // server does not have, and a notice in the prerendered HTML would flash up
  // on every phone that had already dismissed it.
  useEffect(() => {
    if (!hasSeenNotice()) setShow(true);
  }, []);

  if (!show) return null;

  const dismiss = () => {
    markNoticeSeen();
    setShow(false);
  };

  return (
    <div className="sheet-backdrop" role="dialog" aria-modal="true" aria-label="About this pilot">
      <div className="sheet">
        <h2>Before you start</h2>
        <p>
          This app is being tested with a few students this term. While you use
          it, it keeps a note of things like which lessons you opened and how
          your quizzes went.
        </p>
        <ul>
          <li>It is saved <strong>on this phone only</strong>.</li>
          <li>It does <strong>not</strong> include your name or admission number.</li>
          <li>Nothing is sent anywhere unless <strong>you</strong> tap the send button.</li>
          <li>You can erase all of it any time under <strong>Settings</strong>.</li>
        </ul>
        <p className="text-muted">
          It helps your teacher find the parts of the app that are broken or
          confusing.
        </p>
        <button type="button" className="btn btn-block" onClick={dismiss}>
          Got it
        </button>
      </div>
    </div>
  );
}
