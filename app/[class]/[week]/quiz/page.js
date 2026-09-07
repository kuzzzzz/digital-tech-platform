import { getModule } from '../../../../lib/content';
import { toStudentModule } from '../../../../lib/studentView';
import { weekLabel } from '../../../../lib/moduleMeta';
import Quiz from '../../../../components/Quiz';

/**
 * The week's objective quiz, embedded at build time.
 *
 * Same reason as the lesson page: fetching the module JSON is blocked from
 * file://, so the questions have to be in the page.
 *
 * The questions carry their answers, as they always have - marking is done in
 * the browser because there is no backend to do it. lib/studentView.js explains
 * why that is a consequence of the no-login constraint rather than a leak; what
 * matters here is that everything else teacher-only is stripped first.
 */
export default function QuizPage({ params }) {
  const classId = (params?.class || 'ss1').toLowerCase();
  const weekSlug = params?.week || 'week-01';
  const weekNum = parseInt(String(weekSlug).replace(/\D/g, ''), 10) || 1;

  const raw = getModule(classId, weekNum);
  const lessonHref = `/${classId}/week-${String(weekNum).padStart(2, '0')}/`;

  if (!raw) {
    return (
      <div>
        <p>Quiz data not available for week {weekNum}.</p>
        <a href={`/${classId}/`} className="btn btn-secondary">Back</a>
      </div>
    );
  }

  const mod = toStudentModule(raw);

  return (
    <div>
      <p className="text-muted">{weekLabel(mod)}: {mod.title}</p>
      <Quiz questions={mod.quiz || []} moduleId={mod.id} classId={classId} />
      <p className="mt-2">
        <a href={lessonHref} className="text-muted">&larr; Back to lesson</a>
      </p>
    </div>
  );
}
