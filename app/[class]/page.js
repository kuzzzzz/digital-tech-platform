import { getAllModules, getClasses } from '../../lib/content';
import ModuleCard from '../../components/ModuleCard';

export function generateStaticParams() {
  return getClasses().map((c) => ({ class: c }));
}

export default function ClassPage({ params }) {
  const classId = (params?.class || 'ss1').toLowerCase();
  const modules = getAllModules(classId);

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>{classId.toUpperCase()} – Modules</h2>
      <p className="text-muted">
        Complete lessons in order. Locked modules open on their release date
        or after you pass the previous week challenge.
      </p>

      <ul className="module-list">
        {modules.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            classId={classId}
            unlocked={true}
            completion={0}
          />
        ))}
      </ul>

      {modules.length === 0 && (
        <p>No modules found. Add week-XX.md files under content/{classId}/.</p>
      )}
    </div>
  );
}
