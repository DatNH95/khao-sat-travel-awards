import { categoryGroups } from '../../config/survey-categories';
import { getSurveyProfiles, type CategoryResponse } from '../../config/survey-demo';

export const surveyHistoryKey = 'travel-awards-survey:completed:v1';

// Only completed responses are persisted. Unknown/stale IDs and invalid scores never lock a category.
export function parseSurveyHistory(raw: string | null): Record<string, CategoryResponse> {
  if (!raw) return {};
  let data: unknown;
  try { data = JSON.parse(raw); } catch { return {}; }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
  const saved: Record<string, CategoryResponse> = {};
  for (const category of categoryGroups.flatMap(group => group.categories)) {
    const value: unknown = (data as Record<string, unknown>)[category.id];
    if (!value || typeof value !== 'object') continue;
    const record = value as Record<string, unknown>;
    if (record.completed !== true) continue;
    if (record.noneUsed === true) {
      saved[category.id] = { completed: true, noneUsed: true, selected: [], ratings: {} };
      continue;
    }
    if (record.noneUsed !== false || !Array.isArray(record.selected) || !record.selected.length || !record.ratings || typeof record.ratings !== 'object') continue;
    const ids = new Set(getSurveyProfiles(category.id).map(profile => profile.id));
    const scores = record.ratings as Record<string, unknown>;
    const selected = record.selected;
    if (!selected.every((id): id is string => typeof id === 'string' && ids.has(id) && Number.isInteger(scores[id]) && Number(scores[id]) >= 1 && Number(scores[id]) <= 5)) continue;
    const unique = [...new Set(selected as string[])];
    saved[category.id] = { completed: true, noneUsed: false, selected: unique, ratings: Object.fromEntries(unique.map(id => [id, Number(scores[id])])) };
  }
  return saved;
}

export function serializeSurveyHistory(responses: Record<string, CategoryResponse>): string {
  return JSON.stringify(Object.fromEntries(Object.entries(responses).filter(([, response]) => response.completed)));
}
