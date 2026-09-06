import { getAllModules, getClasses } from '../../lib/content';
import { toCardSummary } from '../../lib/moduleMeta';
import ModuleCard from '../../components/ModuleCard';

export function generateStaticParams() {
  return getClasses().map((c) => ({ class: c }));
}

export default function ClassPage({ params }) {
  const classId = (params?.class || 'ss1').toLowerCase();
  // Reduced to card summaries HERE, on the server. ModuleCard is a client
  // component and every prop it takes ends up in the page HTML, so the full
  // modules - teacher notes, marking keys, quiz answers - must not travel.
  const cards = getAllModules(classId).map(toCardSummary);

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>{classId.toUpperCase()} – Modules</h2>
      <p className="text-muted">
        Complete lessons in order. Locked modules open on their release date
        or after you pass the previous week challenge.
      </p>

      <ul className="module-list">
        {cards.map((card) => (
          <ModuleCard
            key={card.id}
            card={card}
            classId={classId}
            unlocked={true}
            completion={0}
          />
        ))}
      </ul>

      {cards.length === 0 && (
        <p>No modules found. Add week-XX.md files under content/{classId}/.</p>
      )}
    </div>
  );
}
