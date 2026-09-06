/**
 * Release dates and unlock logic.
 * Progress is stored in localStorage (client-side only).
 *
 * Unlock rule:
 *   unlocked = (today >= releaseDate)
 *           || (localStorage challengePassed[moduleId] === true)
 *           || (week number is lower than the current week)
 *
 * Past modules NEVER re-lock.
 * Locked modules stay VISIBLE but greyed.
 * Revision content is never locked.
 */

const scheduleData = require('../data/schedule.json');

function getReleaseDate(classId, week) {
  const key = classId.toLowerCase();
  const classSchedule = scheduleData[key];
  if (!classSchedule) return null;
  return classSchedule[String(week)] || null;
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function compareDates(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function isUnlocked(classId, week, progress = null) {
  const releaseDate = getReleaseDate(classId, week);
  const today = todayISO();
  const moduleId = `${classId}-week-${String(week).padStart(2, '0')}`;

  if (releaseDate && compareDates(today, releaseDate) >= 0) {
    return { unlocked: true, reason: 'released', opensDate: releaseDate };
  }

  if (progress && progress.challengePassed && progress.challengePassed[moduleId]) {
    return { unlocked: true, reason: 'challenge', opensDate: releaseDate };
  }

  const currentWeek = getCurrentWeek(classId);
  if (week < currentWeek) {
    return { unlocked: true, reason: 'past', opensDate: releaseDate };
  }

  const prevWeek = week - 1;
  return {
    unlocked: false,
    reason: 'locked',
    opensDate: releaseDate,
    unlockHint:
      prevWeek >= 1
        ? `Opens ${releaseDate || 'soon'}, or unlock now by passing the Week ${prevWeek} challenge`
        : `Opens ${releaseDate || 'soon'}`,
  };
}

function getCurrentWeek(classId) {
  const key = classId.toLowerCase();
  const classSchedule = scheduleData[key] || {};
  const today = todayISO();
  let current = 0;
  for (const [w, date] of Object.entries(classSchedule)) {
    const weekNum = parseInt(w, 10);
    if (compareDates(today, date) >= 0 && weekNum > current) {
      current = weekNum;
    }
  }
  return current || 1;
}

function getModulesStatus(classId, progress = null) {
  const key = classId.toLowerCase();
  const classSchedule = scheduleData[key] || {};
  const weeks = Object.keys(classSchedule)
    .map(Number)
    .sort((a, b) => a - b);

  return weeks.map((week) => {
    const status = isUnlocked(classId, week, progress);
    return {
      week,
      moduleId: `${classId}-week-${String(week).padStart(2, '0')}`,
      ...status,
    };
  });
}

module.exports = {
  getReleaseDate,
  isUnlocked,
  getCurrentWeek,
  getModulesStatus,
  todayISO,
};
