'use client';

import { useState } from 'react';
import { exportPayload, exportFilename, readLog } from '../lib/pilotLog';

/**
 * Hands the log to the teacher, on the student's initiative and no one else's.
 *
 * Two routes, because one of them will not be there:
 *   - navigator.share with the file attached, which on Android puts it one tap
 *     into WhatsApp. This is the path that will actually get used.
 *   - a plain download, for everything else.
 *
 * Nothing here runs on its own. There is no automatic upload, no retry queue,
 * nothing waiting for a connection. The student presses the button or the data
 * stays on the phone.
 */
export default function LogExport() {
  const [status, setStatus] = useState('');
  const [count, setCount] = useState(null);

  const build = () => {
    const payload = exportPayload();
    const json = JSON.stringify(payload, null, 2);
    return {
      json,
      name: exportFilename(),
      blob: new Blob([json], { type: 'application/json' }),
      events: payload.events.length,
    };
  };

  const download = (file) => {
    const url = URL.createObjectURL(file.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Freed on the next tick so the browser has taken the blob first.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const send = async () => {
    const file = build();
    setCount(file.events);

    if (file.events === 0) {
      setStatus('Nothing to send yet - use a lesson first.');
      return;
    }

    try {
      const asFile = new File([file.blob], file.name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [asFile] })) {
        await navigator.share({
          files: [asFile],
          title: 'DT Platform pilot log',
        });
        setStatus(`Shared ${file.events} events. Thank you.`);
        return;
      }
    } catch (e) {
      // Cancelled, or sharing files is not supported here. Fall through to the
      // download rather than telling the student it failed.
    }

    try {
      download(file);
      setStatus(`Saved ${file.name} to your downloads. Send that file to your teacher.`);
    } catch (e) {
      setStatus('Could not save the file on this phone. Tell your teacher.');
    }
  };

  return (
    <div className="mt-2">
      <button type="button" className="btn btn-block" onClick={send}>
        Send my log to the teacher
      </button>
      {status && <p className="text-muted mt-1">{status}</p>}
      {count === null && (
        <p className="text-muted mt-1">
          Nothing is sent until you press this.
        </p>
      )}
    </div>
  );
}
