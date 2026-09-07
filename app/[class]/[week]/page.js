import { getModule } from '../../../lib/content';
import { toStudentModule } from '../../../lib/studentView';
import { renderBody } from '../../../lib/markdown';
import { weekLabel } from '../../../lib/moduleMeta';
import LessonDeck from '../../../components/LessonDeck';

/**
 * A week's lesson cards, rendered into the page at build time.
 *
 * This used to be a client component that fetched /data/ss1-week-01.json on
 * mount. That can never work from a flash drive: a file:// page has the opaque
 * origin "null", so fetch() of a sibling file is a cross-origin request and the
 * browser blocks it before the path is even considered. Making the URL relative
 * fixed the path and changed nothing - the page still said
 * "Could not load week 1. Failed to fetch".
 *
 * Reading the module here instead puts the lesson in the HTML, so the page has
 * nothing left to load, which is also what the brief means by rendering
 * markdown at build time.
 *
 * toStudentModule first, always. Whatever this hands to LessonDeck is
 * serialised into the page source, so teacher notes and answer keys have to be
 * gone before the props are built, not hidden by the components afterwards.
 */
export default function WeekLessonPage({ params }) {
  const classId = (params?.class || 'ss1').toLowerCase();
  const weekSlug = params?.week || 'week-01';
  const weekNum = parseInt(String(weekSlug).replace(/\D/g, ''), 10) || 1;

  const raw = getModule(classId, weekNum);
  const backHref = `/${classId}/`;

  if (!raw) {
    return (
      <div>
        <p>Week {weekNum} is not in the content folder yet.</p>
        <a href={backHref} className="btn btn-secondary">Back to modules</a>
      </div>
    );
  }

  const mod = toStudentModule(raw);
  const cards = (mod.periods || [])
    .flatMap((p) => p.cards || [])
    .map((c) => ({ id: c.id, heading: c.heading, bodyHtml: renderBody(c.body) }));

  const heading = `${weekLabel(mod)}: ${mod.title}`;
  const quizHref = `/${classId}/week-${String(weekNum).padStart(2, '0')}/quiz/`;

  // Assessment, break and revision weeks have no cards. A deck of nothing is
  // worse than a sentence saying so.
  if (cards.length === 0) {
    return (
      <div>
        <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>{heading}</h2>
        <p>This week has no lesson cards - it is sat in class.</p>
        <a href={quizHref} className="btn">Go to Evaluation</a>
        <p className="mt-2">
          <a href={backHref} className="text-muted">&larr; Back to modules</a>
        </p>
      </div>
    );
  }

  return (
    <LessonDeck
      heading={heading}
      cards={cards}
      quizHref={quizHref}
      backHref={backHref}
      moduleId={mod.id}
      classId={classId}
      week={weekNum}
    />
  );
}
