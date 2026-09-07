/**
 * Class picker: SS1 or SS2
 */
import LogExport from '../components/LogExport';

export default function HomePage() {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Choose your class</h2>
      <p className="text-muted">
        Digital Technologies – Senior Secondary. Works offline after first visit.
      </p>

      <div className="class-grid">
        <a href="/ss1/" className="class-card">
          SS1
        </a>
        <a href="/ss2/" className="class-card">
          SS2
        </a>
      </div>

      <p className="text-muted mt-2">
        Progress is saved on this device only. No account needed.
      </p>

      <LogExport />
    </div>
  );
}
