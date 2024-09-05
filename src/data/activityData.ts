export interface DayActivity {
  date: string; // ISO date string
  sports: boolean;
  twitter: boolean;
  work: boolean;
  growth: boolean;
  note?: string; // Optional note for the day
}

export const ACTIVITY_DATA: DayActivity[] = [
  {
    date: '2024-09-04',
    sports: true,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  }
];

export function getActivityLevel(activity: DayActivity): number {
  return [activity.sports, activity.twitter, activity.work, activity.growth].filter(Boolean).length;
}

export function getActivityForDate(date: string): DayActivity | undefined {
  return ACTIVITY_DATA.find(activity => activity.date === date);
}