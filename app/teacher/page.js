import { getAllModules, getClasses } from '../../lib/content';

export default function TeacherPage() {
  const classes = getClasses();

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Teacher Helper Notes</h2>
      <p className="text-muted">
        Phase 1 – open access. Notes are embedded at build time from the markdown.
      </p>

      {classes.map((classId) => {
        const modules = getAllModules(classId);
        return (
          <section key={classId} className="mb-2">
            <h3>{classId.toUpperCase()}</h3>
            {modules.map((mod) => (
              <details key={mod.id} style={{ marginBottom: 12 }}>
                <summary>
                  Week {mod.week}: {mod.title}
                </summary>
                <div className="teacher-notes">
                  {mod.teacherNotes ? (
                    <div style={{ whiteSpace: 'pre-wrap' }}>{mod.teacherNotes}</div>
                  ) : (
                    <p className="text-muted">No helper notes for this week.</p>
                  )}
                  {mod.resources && mod.resources.length > 0 && (
                    <div className="mt-1">
                      <strong>Resources:</strong>
                      <ul>
                        {mod.resources.map((r, i) => (
                          <li key={i}>
                            <a href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mod.assignment && (
                    <div className="mt-1">
                      <strong>Assignment:</strong>
                      <div style={{ whiteSpace: 'pre-wrap' }}>{mod.assignment}</div>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </section>
        );
      })}
    </div>
  );
}
