import ClearData from '../../components/ClearData';
import LogExport from '../../components/LogExport';

export const metadata = { title: 'Settings' };

export default function SettingsPage() {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Settings</h2>

      <h3>What this app stores</h3>
      <p>
        While the app is being tested this term, it keeps a note on this phone
        of which lessons you opened, how long you spent on each card, and how
        your quizzes went. It also keeps any problem reports you write.
      </p>
      <ul>
        <li>It is stored <strong>on this phone only</strong>.</li>
        <li>It does <strong>not</strong> contain your name or admission number.</li>
        <li>Nothing is sent anywhere unless you tap the button below.</li>
      </ul>

      <h3>Send it to your teacher</h3>
      <LogExport />

      <h3 className="mt-2">Erase it</h3>
      <ClearData />

      <p className="mt-2">
        <a href="/" className="text-muted">&larr; Back</a>
      </p>
    </div>
  );
}
