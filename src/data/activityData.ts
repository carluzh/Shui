import { format, subDays } from 'date-fns';

export interface DayActivity {
  date: string; // ISO date string
  sports: boolean;
  twitter: boolean;
  work: boolean;
  todo: boolean;
  note?: string; // Optional note for the day
}

export const ACTIVITY_DATA: DayActivity[] = [
  // July 2024
  {
    date: '2024-07-29',
    sports: true,
    twitter: true,
    work: true,
    todo: true,
    note: 'Full activity day'
  },
  {
    date: '2024-07-30',
    sports: false,
    twitter: true,
    work: true,
    todo: false,
    note: 'Partial activity'
  },
  {
    date: '2024-07-31',
    sports: true,
    twitter: false,
    work: false,
    todo: false,
    note: 'Low activity'
  },
  // August 2024
  {
    date: '2024-08-01',
    sports: false,
    twitter: false,
    work: false,
    todo: true,
    note: 'No activity'
  },
  {
    date: '2024-08-02',
    sports: true,
    twitter: true,
    work: true,
    todo: false,
    note: 'High activity'
  },
  {
    date: '2024-08-03',
    sports: true,
    twitter: true,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-04',
    sports: false,
    twitter: true,
    work: true,
    todo: true,
    note: 'High activity'
  },
  {
    date: '2024-08-05',
    sports: true,
    twitter: false,
    work: true,
    todo: false,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-06',
    sports: false,
    twitter: false,
    work: true,
    todo: true,
    note: 'Partial activity'
  },
  {
    date: '2024-08-07',
    sports: true,
    twitter: true,
    work: true,
    todo: true,
    note: 'Full activity day'
  },
  {
    date: '2024-08-08',
    sports: false,
    twitter: true,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-09',
    sports: true,
    twitter: false,
    work: true,
    todo: false,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-10',
    sports: false,
    twitter: false,
    work: false,
    todo: true,
    note: 'Low activity'
  },
  {
    date: '2024-08-11',
    sports: true,
    twitter: true,
    work: false,
    todo: false,
    note: 'Partial activity'
  },
  {
    date: '2024-08-12',
    sports: false,
    twitter: true,
    work: true,
    todo: true,
    note: 'High activity'
  },
  {
    date: '2024-08-13',
    sports: true,
    twitter: false,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-14',
    sports: false,
    twitter: false,
    work: true,
    todo: false,
    note: 'Low activity'
  },
  {
    date: '2024-08-15',
    sports: true,
    twitter: true,
    work: true,
    todo: true,
    note: 'Full activity day'
  },
  {
    date: '2024-08-16',
    sports: false,
    twitter: true,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-17',
    sports: true,
    twitter: false,
    work: true,
    todo: false,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-18',
    sports: false,
    twitter: false,
    work: false,
    todo: false,
    note: 'No activity'
  },
  {
    date: '2024-08-19',
    sports: true,
    twitter: true,
    work: true,
    todo: false,
    note: 'High activity'
  },
  {
    date: '2024-08-20',
    sports: false,
    twitter: true,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-21',
    sports: true,
    twitter: false,
    work: true,
    todo: true,
    note: 'High activity'
  },
  {
    date: '2024-08-22',
    sports: false,
    twitter: false,
    work: true,
    todo: false,
    note: 'Low activity'
  },
  {
    date: '2024-08-23',
    sports: true,
    twitter: true,
    work: false,
    todo: true,
    note: 'High activity'
  },
  {
    date: '2024-08-24',
    sports: false,
    twitter: true,
    work: true,
    todo: false,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-25',
    sports: true,
    twitter: false,
    work: false,
    todo: true,
    note: 'Mixed activity'
  },
  {
    date: '2024-08-26',
    sports: true,
    twitter: true,
    work: true,
    todo: true,
    note: 'High activity'
  },
  {
    date: '2024-08-27',
    sports: true,
    twitter: true,
    work: true,
    todo: true,
    note: 'High activity'
  }
];

export function getActivityLevel(activity: DayActivity): number {
  return [activity.sports, activity.twitter, activity.work, activity.todo].filter(Boolean).length;
}

export function getActivityForDate(date: string): DayActivity | undefined {
  return ACTIVITY_DATA.find(activity => activity.date === date);
}