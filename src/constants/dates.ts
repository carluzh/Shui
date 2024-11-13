import { startOfWeek, endOfWeek, subWeeks, subMonths } from 'date-fns';

export const TODAY = new Date();
export const WEEKLY_START_DATE = startOfWeek(subWeeks(TODAY, 2), { weekStartsOn: 1 });
export const WEEKLY_END_DATE = endOfWeek(TODAY, { weekStartsOn: 1 });
export const MONTHLY_END_DATE = endOfWeek(TODAY, { weekStartsOn: 1 });
export const MONTHLY_START_DATE = startOfWeek(subMonths(MONTHLY_END_DATE, 3), { weekStartsOn: 1 });
export const MONTHS = Array.from({ length: 3 }, (_, i) => subMonths(TODAY, 2 - i)); 