// Separate local preview by default; set the public site URL when deploying.
const travelAwardsBase = (process.env.NEXT_PUBLIC_TRAVEL_AWARDS_URL ?? 'http://127.0.0.1:3001').replace(/\/$/, '');

export function travelAwardsUrl(path: string) {
  return `${travelAwardsBase}${path}`;
}
