import { subDays, format, isSameDay } from 'date-fns';

export function getToday() {
  if (typeof window !== 'undefined') {
    return new Date();
  }
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

export function initializeDateUpdates(callback) {
  if (typeof window === 'undefined') return;
  
  callback();
  
  const interval = setInterval(callback, 60000);
  return interval;
}

// Add any other date-related utility functions you might need