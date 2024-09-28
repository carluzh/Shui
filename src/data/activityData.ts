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
    date: '2024-09-28',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-27',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  },
  {
    date: '2024-09-26',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-25',
    sports: true,
    twitter: false,
    work: false,
    growth: true,
    note: 'S'
  },
  {
    date: '2024-09-24',
    sports: true,
    twitter: true,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-23',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-22',
    sports: true,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-21',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-20',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-19',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-18',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-17',
    sports: true,
    twitter: true,
    work: false,
    growth: false,
    note: ''
  },
  {
    date: '2024-09-16',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-15',
    sports: false,
    twitter: true,
    work: true,
    growth: false,
    note: ''
  },
  {
    date: '2024-09-14',
    sports: true,
    twitter: true,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-13',
    sports: false,
    twitter: false,
    work: true,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-12',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: ''
  },
  {
    date: '2024-09-11',
    sports: false,
    twitter: false,
    work: false,
    growth: true,
    note: ''
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