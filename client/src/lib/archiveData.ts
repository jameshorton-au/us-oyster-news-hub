// Archive of past US Oyster AI Edition newsletters
// Prepend the most recently replaced edition each week

export interface ArchivedEdition {
  id: string;
  date: string;
  isoDate: string;
  headline: string;
  summary: string;
  topStories: string[];
  urgentCount: number;
  tags: string[];
  regions: string[];
}

export const archivedEditions: ArchivedEdition[] = [
  // Previous editions will be prepended here each week.
  // The May 18, 2026 edition is the current live edition in newsData.ts.
];
