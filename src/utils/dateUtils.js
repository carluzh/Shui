import { subDays, format, isSameDay } from 'date-fns';

export function getToday() {
  return new Date();
}

export function formatDate(date) {
  return format(date, 'yyyy-MM-dd');
}

export function isToday(date) {
  return isSameDay(date, getToday());
}

export function getYesterday() {
  return subDays(getToday(), 1);
}

// Add any other date-related utility functions you might need