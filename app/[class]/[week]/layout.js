/**
 * Layout for week routes – provides generateStaticParams for [week]
 */

import { getAvailableWeeks, getClasses } from '../../../lib/content';

export function generateStaticParams() {
  const params = [];
  for (const classId of getClasses()) {
    const weeks = getAvailableWeeks(classId);
    for (const week of weeks) {
      params.push({
        class: classId,
        week: `week-${String(week).padStart(2, '0')}`,
      });
    }
  }
  return params;
}

export default function WeekLayout({ children }) {
  return children;
}
