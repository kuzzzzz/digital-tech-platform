/**
 * Strips a module down to what a student may receive.
 *
 * Everything the app serves is a static file, so "reachable only under
 * /teacher" can only mean "never sent to a student page". There is no auth
 * to enforce anything stronger, and adding some is a phase-two decision.
 * What this guarantees is that no student page, and no file a student page
 * fetches, contains teacher material at all.
 *
 * Removed:
 *   teacherNotes                       whole field
 *   extraSections[teacherOnly]         test papers, teacher instructions
 *   cards[].answerKey                  diagnostic keys inside lesson cards
 *   practical.answerKey                "Worked answers for the teacher"
 *   theoryQuestions[].marks            the mark scheme
 *
 * Kept, deliberately: quiz[].answer. Marking is client-side because there is
 * no backend, so the answer has to reach the browser. It is not rendered
 * before submission, but a determined student can read it. That is a known
 * consequence of the no-backend constraint, not an oversight.
 */
function toStudentModule(module) {
  return {
    id: module.id,
    class: module.class,
    week: module.week,
    weekTo: module.weekTo || null,
    kind: module.kind,
    title: module.title,
    subtopics: module.subtopics || [],
    objectives: module.objectives || [],
    entryBehaviour: module.entryBehaviour || '',
    materials: module.materials || '',
    periods: (module.periods || []).map((p) => ({
      n: p.n,
      cards: (p.cards || []).map((c) => ({
        id: c.id,
        heading: c.heading,
        body: c.body,
      })),
    })),
    quiz: (module.quiz || []).map((q) => ({
      q: q.q,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation || '',
    })),
    theoryQuestions: (module.theoryQuestions || []).map((t) => ({ text: t.text })),
    practical: module.practical
      ? { heading: module.practical.heading, body: module.practical.body }
      : null,
    assignment: module.assignment || '',
    resources: module.resources || [],
    extraSections: (module.extraSections || [])
      .filter((s) => !s.teacherOnly)
      .map((s) => ({ heading: s.heading, body: s.body })),
  };
}

module.exports = { toStudentModule };
