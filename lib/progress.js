/**
 * Student progress stored in localStorage only.
 * Keys used:
 *   dtp-progress          – overall progress object
 *   dtp-challenge-passed  – map of moduleId -> true
 *
 * Shape of progress:
 * {
 *   ss1: {
 *     completedCards: { "ss1-week-01": ["1.1", "1.2"], ... },
 *     quizScores: { "ss1-week-01": 4, ... },
 *     challengePassed: { "ss1-week-01": true, ... },
 *     lastVisited: "ss1-week-02"
 *   },
 *   ss2: { ... }
 * }
 */

const STORAGE_KEY = 'dtp-progress';

function getProgress() {
  if (typeof window === 'undefined') {
    return { ss1: {}, ss2: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ss1: {}, ss2: {} };
    return JSON.parse(raw);
  } catch {
    return { ss1: {}, ss2: {} };
  }
}

function setProgress(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('[progress] Failed to save', e);
  }
}

function getClassProgress(classId) {
  const all = getProgress();
  return all[classId.toLowerCase()] || {
    completedCards: {},
    quizScores: {},
    challengePassed: {},
    lastVisited: null,
  };
}

function markCardComplete(classId, moduleId, cardId) {
  const all = getProgress();
  const key = classId.toLowerCase();
  if (!all[key]) {
    all[key] = {
      completedCards: {},
      quizScores: {},
      challengePassed: {},
      lastVisited: null,
    };
  }
  if (!all[key].completedCards[moduleId]) {
    all[key].completedCards[moduleId] = [];
  }
  if (!all[key].completedCards[moduleId].includes(cardId)) {
    all[key].completedCards[moduleId].push(cardId);
  }
  all[key].lastVisited = moduleId;
  setProgress(all);
}

function saveQuizResult(classId, moduleId, score, total, passChallenge = false) {
  const all = getProgress();
  const key = classId.toLowerCase();
  if (!all[key]) {
    all[key] = {
      completedCards: {},
      quizScores: {},
      challengePassed: {},
      lastVisited: null,
    };
  }
  all[key].quizScores[moduleId] = score;
  if (passChallenge) {
    all[key].challengePassed[moduleId] = true;
  }
  all[key].lastVisited = moduleId;
  setProgress(all);
}

function hasPassedChallenge(classId, moduleId) {
  const prog = getClassProgress(classId);
  return !!(prog.challengePassed && prog.challengePassed[moduleId]);
}

function getModuleCompletion(classId, moduleId, totalCards) {
  if (totalCards === 0) return 0;
  const prog = getClassProgress(classId);
  const done = (prog.completedCards[moduleId] || []).length;
  return Math.min(100, Math.round((done / totalCards) * 100));
}

function resetProgress() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

module.exports = {
  getProgress,
  setProgress,
  getClassProgress,
  markCardComplete,
  saveQuizResult,
  hasPassedChallenge,
  getModuleCompletion,
  resetProgress,
  STORAGE_KEY,
};
