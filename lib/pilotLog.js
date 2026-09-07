'use client';

/**
 * Append-only event log for the five-student pilot.
 *
 * Everything stays in localStorage on the student's own phone. Nothing is sent
 * anywhere unless the student presses the send button themselves - no SDK, no
 * beacon, no phone-home, not even a queued one. The teacher collects five files
 * by hand, which is the right amount of machinery for five students in a room.
 *
 * NOTHING IDENTIFYING GOES IN HERE. No names, no admission numbers, no free
 * text that names a person. The device id is a random uuid with no link to a
 * student; the teacher knows which of five phones is which because there are
 * five of them. Kept anonymous, this stays outside the NDPA entirely, which is
 * the same reason there is no login - see CLAUDE.md.
 *
 * The log is capped at MAX_EVENTS and drops oldest first, so a shared 2GB phone
 * cannot be filled by a term of card views.
 */

const LOG_KEY = 'dtp-pilot-log';
const DEVICE_KEY = 'dtp-device-id';
const NOTICE_KEY = 'dtp-pilot-notice-seen';
const SESSION_KEY = 'dtp-session-id';

// ~500 events is a few weeks of real use for one student. Past that the oldest
// go, because a phone that stops working is a worse outcome than a short log.
const MAX_EVENTS = 500;

function browser() {
  return typeof window !== 'undefined';
}

/** localStorage throws in private mode and when the quota is gone. */
function read(key, fallback) {
  if (!browser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function write(key, value) {
  if (!browser()) return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function uuid() {
  try {
    if (browser() && window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }
  } catch (e) {
    // Older Android WebViews. Falls through.
  }
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Random, persistent, and deliberately not derived from anything about a person. */
function deviceId() {
  if (!browser()) return 'server';
  let id = read(DEVICE_KEY, null);
  if (!id) {
    id = uuid();
    write(DEVICE_KEY, id);
  }
  return id;
}

/** New per tab session, so "how long was one sitting" is answerable. */
function sessionId() {
  if (!browser()) return 'server';
  try {
    let id = window.sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = uuid();
      window.sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch (e) {
    return 'no-session-storage';
  }
}

/** browser tab, installed to the home screen, or opened off a flash drive. */
function displayMode() {
  if (!browser()) return 'server';
  if (window.location.protocol === 'file:') return 'file';
  try {
    if (window.navigator.standalone) return 'installed';
    if (window.matchMedia('(display-mode: standalone)').matches) return 'installed';
    if (window.matchMedia('(display-mode: fullscreen)').matches) return 'installed';
  } catch (e) {
    // matchMedia is missing on very old WebViews.
  }
  return 'browser';
}

function isOnline() {
  return browser() ? window.navigator.onLine !== false : null;
}

function connectionType() {
  if (!browser()) return null;
  const c = window.navigator.connection
    || window.navigator.mozConnection
    || window.navigator.webkitConnection;
  return c && c.effectiveType ? c.effectiveType : null;
}

/**
 * What kind of device and connection this is, recorded once per session rather
 * than repeated on every event.
 *
 * The storage estimate is a promise, so it lands as a second, later event
 * instead of holding up the first one.
 */
function deviceContext() {
  if (!browser()) return {};
  return {
    device: deviceId(),
    screenWidth: window.screen ? window.screen.width : null,
    pixelRatio: window.devicePixelRatio || null,
    userAgent: window.navigator.userAgent || null,
    connection: connectionType(),
    displayMode: displayMode(),
  };
}

// Set by whichever page is showing, so events do not each have to be told.
let currentModule = null;
let currentCard = null;

function setContext(moduleId, cardId) {
  currentModule = moduleId || null;
  currentCard = cardId === undefined ? null : cardId;
}

function getContext() {
  return { moduleId: currentModule, cardId: currentCard };
}

function readLog() {
  const events = read(LOG_KEY, []);
  return Array.isArray(events) ? events : [];
}

/**
 * Append one event.
 *
 * Returns the event so a caller can hand it straight to a confirmation
 * message - the bug report needs to know its own submission really landed.
 */
function log(type, data = {}) {
  if (!browser()) return null;

  const event = {
    t: new Date().toISOString(),
    type,
    session: sessionId(),
    online: isOnline(),
    moduleId: data.moduleId !== undefined ? data.moduleId : currentModule,
    ...data,
  };

  const events = readLog();
  events.push(event);
  // Oldest first, so the log always describes the most recent use.
  const trimmed = events.length > MAX_EVENTS
    ? events.slice(events.length - MAX_EVENTS)
    : events;

  write(LOG_KEY, trimmed);
  return event;
}

function recent(n = 20) {
  const events = readLog();
  return events.slice(Math.max(0, events.length - n));
}

/** The whole thing, shaped for the teacher-side reader. */
function exportPayload() {
  return {
    format: 'dtp-pilot-log/1',
    exportedAt: new Date().toISOString(),
    ...deviceContext(),
    events: readLog(),
  };
}

function exportFilename() {
  const date = new Date().toISOString().slice(0, 10);
  return `pilot-log-${deviceId()}-${date}.json`;
}

/**
 * Wipes everything this app has stored: log, device id, notice, progress.
 *
 * The device id goes too. Clearing the data and keeping the identifier that
 * ties the next log to the last one would not be clearing the data.
 */
function clearAll() {
  if (!browser()) return;
  for (const key of [LOG_KEY, DEVICE_KEY, NOTICE_KEY, 'dtp-progress']) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // Nothing useful to do; the button below reports what it can.
    }
  }
  try {
    window.sessionStorage.removeItem(SESSION_KEY);
  } catch (e) {
    // Same.
  }
}

function hasSeenNotice() {
  return read(NOTICE_KEY, false) === true;
}

function markNoticeSeen() {
  write(NOTICE_KEY, true);
}

module.exports = {
  log,
  readLog,
  recent,
  setContext,
  getContext,
  deviceId,
  sessionId,
  deviceContext,
  displayMode,
  connectionType,
  isOnline,
  exportPayload,
  exportFilename,
  clearAll,
  hasSeenNotice,
  markNoticeSeen,
  LOG_KEY,
  DEVICE_KEY,
  NOTICE_KEY,
  MAX_EVENTS,
};
