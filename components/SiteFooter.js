'use client';

import BugReport from './BugReport';

/**
 * On every page, because a problem gets reported where it happens or not at all.
 */
export default function SiteFooter() {
  return (
    <footer className="app-footer">
      <BugReport />
      <a href="/settings/" className="text-muted">Settings</a>
    </footer>
  );
}
