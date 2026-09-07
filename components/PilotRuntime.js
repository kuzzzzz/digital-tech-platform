'use client';

import { useEffect } from 'react';
import {
  log, deviceContext, displayMode, isOnline,
} from '../lib/pilotLog';
import ConsentNotice from './ConsentNotice';

// One app_open and one device description per tab session, not per page load.
// Every navigation here is a full page load - the app uses plain anchors - so
// logging on mount alone would file a fresh "app opened" every time a student
// tapped Next into the quiz.
const SESSION_FLAG = 'dtp-session-logged';

function onceThisSession() {
  try {
    if (window.sessionStorage.getItem(SESSION_FLAG)) return false;
    window.sessionStorage.setItem(SESSION_FLAG, '1');
    return true;
  } catch (e) {
    // No sessionStorage: log every load rather than nothing at all.
    return true;
  }
}

/**
 * The pilot's always-on bits: session record, crash capture, and the
 * cache-vs-network tally the service worker collected.
 *
 * Mounted once in the layout, renders nothing but the first-run notice.
 */
export default function PilotRuntime() {
  useEffect(() => {
    if (onceThisSession()) {
      log('app_open', { source: displayMode(), ...deviceContext() });

      // A promise, so it lands as its own event rather than delaying the first.
      try {
        if (navigator.storage && navigator.storage.estimate) {
          navigator.storage.estimate().then((est) => {
            log('storage_estimate', {
              quota: est.quota || null,
              usage: est.usage || null,
            });
          }).catch(() => {});
        }
      } catch (e) {
        // Not available on older Android. Nothing to record.
      }
    }

    const onError = (e) => {
      log('error', {
        message: String(e.message || e.type || 'unknown'),
        stack: e.error && e.error.stack ? String(e.error.stack).slice(0, 800) : null,
        source: e.filename || null,
      });
    };
    const onRejection = (e) => {
      const r = e.reason;
      log('error', {
        message: String((r && r.message) || r || 'unhandled rejection'),
        stack: r && r.stack ? String(r.stack).slice(0, 800) : null,
      });
    };
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);

    // Ask the worker for the navigations it served since the last page. It
    // cannot post them as they happen: the page that would receive the message
    // is the one being navigated away from, and it is usually gone first.
    let drained = false;
    const drain = () => {
      if (drained) return;
      drained = true;
      try {
        const sw = navigator.serviceWorker;
        if (!sw || !sw.controller) return;
        const channel = new MessageChannel();
        channel.port1.onmessage = (event) => {
          const hits = (event.data && event.data.hits) || [];
          for (const hit of hits) {
            log(hit.fromCache ? 'offline_hit' : 'network_hit', {
              url: hit.url,
              online: hit.online,
            });
          }
        };
        sw.controller.postMessage({ type: 'drain-hits' }, [channel.port2]);
      } catch (e) {
        // Worker not ready, or no MessageChannel. The tally is best effort.
      }
    };
    drain();
    // The worker often takes control a moment after the first paint.
    const late = setTimeout(drain, 1500);

    const onOffline = () => log('connection_change', { online: false });
    const onOnline = () => log('connection_change', { online: true });
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      clearTimeout(late);
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    };
  }, []);

  return <ConsentNotice />;
}
