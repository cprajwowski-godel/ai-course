export function findNearestSunday(isoDate: string): string {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);

  const nearestSunday = new Date(date.setDate(diff));
  nearestSunday.setDate(nearestSunday.getDate() + 6);

  return nearestSunday.toISOString();
}
