# Digital Technologies Platform

One term of Digital Technologies for Nigerian senior secondary students (SS1
and SS2), delivered as small progressive lesson modules — Brilliant-app style:
short cards, one idea per screen, quiz at the end, modules that unlock over
time.

Built by ONE person — a teacher — alongside a full teaching load. **Optimise
for "can one person ship and maintain this", not architectural elegance.**

## Who this runs for

Students on low-end Android phones, slow expensive mobile data, unreliable
mains power. Device access is mixed and unsurveyed. Design for the worst case:
2GB-RAM Android on 3G, phone shared with siblings, no home wifi. Some students
will only ever get the site as a folder copied off a USB stick at school.

## Hard constraints — do not relax without asking

- Next.js App Router, **JavaScript, not TypeScript**
- `next.config.js` uses `output:'export'`. The build MUST produce a plain
  folder that runs from a web host, from `file://`, AND from a USB drive.
  Not optional — it is the fallback if student data access turns out poor.
- No backend, no database, no auth, no API routes in phase one
- Progress in `localStorage` only
- Plain CSS / CSS Modules. No Tailwind, no UI kit, no component library,
  no animation library
- System font stack only. No Google Fonts — the user pays for those bytes
- PWA: manifest + service worker, fully usable offline after first visit
- Mobile-first, 360px baseline
- Render markdown to HTML at **build** time. Do not ship a markdown parser
  to the phone
- The whole term of lesson text is ~280KB. The app must not dwarf its own
  content

### Why there is no login

Phase one deliberately collects no personal data on minors, which keeps the
project clear of the Nigeria Data Protection Act 2023 — no consent forms, no
privacy policy blocking launch. Adding auth is a phase-two decision with legal
consequences. **Do not propose it as a fix for anything.**

## Content pipeline

    content/raw/{ss1,ss2}-term.md      <- the only files you ever edit
      -> npm run split  (lib/splitter.js)
      -> content/{ss1,ss2}/week-NN.md  <- GENERATED, never hand-edit
      -> lib/parser.js
      -> module JSON

`content/raw/*-term.md` are the **teacher** versions. They deliberately
contain test papers, marking keys and answer keys. That is correct — the
parser separates teacher content from student content. Do not strip anything
from them.

To change a lesson: edit the raw term file and re-split. Editing a generated
week file is wasted work; the next build overwrites it.

### Shape of a teaching week

Assessment and break weeks lack the PERIOD parts. Do not crash on those.

    # WEEK 4 — COMPUTER HARDWARE
    **Sub-topics:** a · b · c            <- separator is U+00B7 MIDDLE DOT
    ## Behavioural Objectives            (numbered list)
    ## Entry Behaviour
    ## Instructional Materials
    ## PERIOD 1 (45 minutes)
    ### 4.1 Heading                      <- each ### is one lesson card
    ### 4.2 Heading
    ## PERIOD 2 (45 minutes)
    ## EVALUATION — WEEK 4
    ### A. Objective Questions (1 mark each)
    1. Question text ______.
     (a) opt (b) opt (c) opt (d) opt
    **Answers:** 1(b) 2(c) 3(a) 4(c) 5(b)
    ### B. Theory Questions              (each ends with **(N marks)**)
    ### C. Practical Activity            (heading wording varies)
    ## TEACHER'S HELPER NOTES — WEEK 4
    ## RESOURCE MATERIALS — WEEK 4
    ## ASSIGNMENT

Content contains markdown tables, fenced HTML/CSS code blocks, blockquotes,
box-drawing ASCII diagrams, the Naira sign and superscripts. Preserve all of
it.

## Module JSON

    {
      id, class, week,
      weekTo,        // 13 on the combined weeks 11-13 module, else null
      kind,          // "lesson" | "assessment" | "break" | "revision"
      title, subtopics[], objectives[], entryBehaviour, materials,
      periods: [{ n, cards: [{ id, heading, body, answerKey }] }],
      quiz: [{ q, options[], answer, explanation }],
      theoryQuestions: [{ text, marks }],
      practical: { heading, body } | null,
      assignment,
      resources: [{ label, url }],
      teacherNotes,
      extraSections: [{ heading, body, teacherOnly }]
    }

`extraSections` catches every `##` section no other extractor claims — that
is where midterm papers and break projects live. Mark `teacherOnly:true` for
test papers and "Instructions to the Teacher". Break projects and revision
plans are student-visible.

`card.answerKey` exists because SS2 week 1 has a diagnostic answer key sitting
inside a lesson card body. Lift any `**Answers:** ...` line out of the body
onto that teacher-only field.

## Teacher vs student — the one thing that must never break

The notes contain full test papers and marking keys. Treat a leak into a
student-visible field as **severity-equal to a crash**.

Never render on a student screen:

    teacherNotes
    theoryQuestions[].marks
    quiz[].answer            (before submission)
    cards[].answerKey
    extraSections where teacherOnly === true

Teacher content is reachable only under `/teacher`.

`npm run audit` fails if `"Worked answers"`, `"Marking key"` or `"**Answers:"`
appears in any student-visible field.

## Unlock rule

    unlocked = (today >= releaseDate)
            || (localStorage challengePassed[moduleId] === true)
            || (module.week < currentWeek)

- Past modules NEVER re-lock
- Locked modules stay VISIBLE but greyed, showing
  "Opens {date}, or unlock now by passing the Week {n-1} challenge".
  Visible-but-locked creates pull. Hidden creates nothing.
- Revision content is never locked
- `kind !== "lesson"` modules must NOT render as lessons with zero cards and
  a broken progress bar — they need their own card treatment

## Audit targets

Measured from the real content files, not guesses. `npm run audit` exits
non-zero if any of these regress:

    modules      22    (11 per class — weeks 11-13 are ONE combined module)
    lesson cards 117
    quiz         80    with ZERO unmapped answers
    theory       103
    practicals   16
    assignments  16
    resources    ~149  (must not be 0)

## Build order

1. **Content readable on a phone.** Parser → cards → deploy. Done when a
   student can read Week 1 on an Android.
2. **Gating + quizzes.** Date unlock, challenge-to-skip, auto-marked quiz,
   progress bar. Done when a locked module opens by passing a test.
3. **Offline.** Service worker, install to home screen, teacher view. Done
   when it works in aeroplane mode.
4. **Buffer week.** Pilot with five real students, fix what breaks.
   ADD NOTHING NEW.

### Not in phase one

auth, database, analytics, Tailwind, any UI library, grading, attendance
tracking, admin CMS. All phase two, after the content platform is live and
proven.

## House style

Small, readable, boring JavaScript. This has to be maintainable by a teacher
at 11pm during term. Comment the non-obvious, especially parser regex. No new
dependency without a reason in the commit message.
