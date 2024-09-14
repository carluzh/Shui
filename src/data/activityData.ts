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
    date: '2024-09-14',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-13',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-12',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-11',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-10',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-09',
    sports: true,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-08',
    sports: false,
    twitter: false,
    work: true,
    growth: false,
    note: ''
  },
  {
    date: '2024-09-07',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-06',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-05',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  },
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