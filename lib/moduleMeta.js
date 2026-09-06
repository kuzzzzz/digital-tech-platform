/**
 * How a module describes itself in a list.
 *
 * Weeks 5, 7 and 11-13 are not lessons. Rendering them as lessons gives a
 * card with no content behind it and a progress bar stuck at 0% that can
 * never move - which reads as broken rather than as "nothing to do online
 * this week".
 */

const KIND_LABELS = {
  lesson: null,           // the default, needs no badge
  assessment: 'Test',
  break: 'Break',
  revision: 'Revision',
};

/** "Week 4", or "Weeks 11-13" for the combined module. */
function weekLabel(module) {
  if (module.weekTo && module.weekTo !== module.week) {
    return `Weeks ${module.week}–${module.weekTo}`;
  }
  return `Week ${module.week}`;
}

function cardCount(module) {
  return (module.periods || []).reduce((n, p) => n + (p.cards || []).length, 0);
}

/** Sections a student may see. Test papers are teacherOnly and excluded. */
function studentSections(module) {
  return (module.extraSections || []).filter((s) => !s.teacherOnly);
}

/**
 * Whether opening this module shows a student anything at all.
 *
 * An assessment week has content, but all of it is the test paper, which is
 * teacher-only - so the card must say the test happens in class rather than
 * link to an empty screen.
 */
function hasStudentContent(module) {
  return cardCount(module) > 0 || studentSections(module).length > 0;
}

/** One line under the title, describing what is actually in there. */
function moduleSummary(module) {
  const cards = cardCount(module);
  const quiz = (module.quiz || []).length;

  if (module.kind === 'lesson') {
    const bits = [];
    if (cards) bits.push(`${cards} card${cards === 1 ? '' : 's'}`);
    if (quiz) bits.push(`${quiz} question${quiz === 1 ? '' : 's'}`);
    return bits.join(' · ') || 'Lesson';
  }

  const sections = studentSections(module);
  if (module.kind === 'assessment') {
    return sections.length
      ? sections[0].heading
      : 'Written in class — nothing to read here';
  }
  if (module.kind === 'break') {
    return sections.length ? sections[0].heading : 'Midterm break';
  }
  if (module.kind === 'revision') {
    return sections.length
      ? `${sections.length} revision section${sections.length === 1 ? '' : 's'}`
      : 'Revision and examinations';
  }
  return '';
}

/** Short badge text for non-lesson modules, or null for a normal lesson. */
function kindBadge(module) {
  return KIND_LABELS[module.kind] || null;
}

/** Revision is never locked - students need it during the exam run-in. */
function neverLocks(module) {
  return module.kind === 'revision';
}

/**
 * The only shape a module list may hand to the browser.
 *
 * ModuleCard is a client component, so whatever it receives as props is
 * serialised into the page HTML for every visitor. Passing the module itself
 * put the full midterm paper and its marking guide into the student class
 * list - visible to anyone who opened view-source. Nothing here is derived
 * from teacherNotes, answerKey, quiz answers, marks, or teacherOnly
 * sections, so there is nothing to leak.
 */
function toCardSummary(module) {
  return {
    id: module.id,
    week: module.week,
    weekTo: module.weekTo || null,
    kind: module.kind,
    title: module.title,
    label: weekLabel(module),
    summary: moduleSummary(module),
    badge: kindBadge(module),
    openable: hasStudentContent(module),
    neverLocks: neverLocks(module),
  };
}

module.exports = {
  toCardSummary,
  weekLabel,
  cardCount,
  studentSections,
  hasStudentContent,
  moduleSummary,
  kindBadge,
  neverLocks,
};
