import React from 'react';
import { format, subDays } from 'date-fns';
import { getActivityForDate, getActivityLevel } from '@/data/activityData';

export function initializeFunctionality() {
  // Logo rotation and messages
  let rotation = 0;
  let clickCount = 0;
  const logoContainer = document.getElementById('logo-container');
  const svg = logoContainer?.querySelector('svg');
  const tempMessage = document.getElementById('temp-message');

  function showMessage(message) {
    if (tempMessage) {
      tempMessage.textContent = message;
      tempMessage.style.opacity = '1';
      setTimeout(() => {
        tempMessage.style.opacity = '0';
      }, 2000);
    }
  }

  logoContainer?.addEventListener('click', () => {
    rotation += 90;
    clickCount++;

    if (svg) {
      svg.style.transform = `rotate(${rotation}deg) scale(${rotation % 180 === 90 ? 0.8 : 1})`;
    }

    switch (clickCount) {
      case 7:
        showMessage("Slow down there Buckaroo.");
        break;
      case 15:
        showMessage("Read an article or something.");
        break;
      case 25:
        showMessage("Stop.");
        break;
      case 35:
        showMessage("No seriously. Please stop.");
        break;
      case 50:
        showMessage("STOOOP!!");
        break;
      case 55:
        showMessage("stop.");
        break;
      case 60:
        window.open('https://www.youtube.com/watch?v=tJXGz4N00dA', '_blank');
        break;
    }
  });

  // Learning in Public animation
  const dots = document.getElementById('dots');
  const dotStates = ['', '.', '..', '...'];
  let currentState = 0;

  function animateDots() {
    if (dots) {
      dots.textContent = dotStates[currentState];
      currentState = (currentState + 1) % dotStates.length;
    }
  }

  setInterval(animateDots, 500);

  // Home link full page reload
  const homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/';
    });
  }

  // Reload on navigation back to home
  if (window.location.pathname === '/') {
    const pageLoadTime = Date.now();
    window.addEventListener('popstate', () => {
      if (Date.now() - pageLoadTime > 1000) {
        window.location.reload();
      }
    });
  }

  // Calendar functionality
  function setupCalendar() {
    const calendarSquares = document.querySelectorAll('.hover-outline');
    
    calendarSquares.forEach(square => {
      square.addEventListener('mouseenter', () => {
        const levelSpan = square.querySelector('.activity-level');
        if (levelSpan) {
          levelSpan.style.opacity = '1';
        }
      });

      square.addEventListener('mouseleave', () => {
        const levelSpan = square.querySelector('.activity-level');
        if (levelSpan) {
          levelSpan.style.opacity = '0';
        }
      });

      square.addEventListener('click', () => {
        const date = square.getAttribute('title').split(':')[0];
        const activity = getActivityForDate(format(new Date(date), 'yyyy-MM-dd'));
        if (activity) {
          const activityLevel = getActivityLevel(activity);
          alert(`Date: ${date}\nActivity Level: ${activityLevel}\nNote: ${activity.note || 'No note'}`);
        }
      });
    });
  }

  // Streak calculation
  function calculateStreak() {
    let streak = 0;
    let currentDate = subDays(new Date(), 1); // Start from yesterday

    while (true) {
      const dateString = format(currentDate, 'yyyy-MM-dd');
      const activity = getActivityForDate(dateString);

      if (activity && getActivityLevel(activity) === 4) {
        streak++;
        currentDate = subDays(currentDate, 1); // Move to the previous day
      } else {
        break; // Break the loop if we find a day without full activity
      }
    }

    const streakCountElement = document.querySelector('.streak-count');
    if (streakCountElement) {
      streakCountElement.textContent = streak.toString();
    }
  }

  // Calendar expand/collapse functionality
  function setupCalendarExpand() {
    const expandButton = document.querySelector('.expand-button');
    const calendarWrapper = document.querySelector('.calendar-wrapper');
    
    if (expandButton && calendarWrapper) {
      expandButton.addEventListener('click', () => {
        calendarWrapper.classList.toggle('expanded');
        expandButton.textContent = calendarWrapper.classList.contains('expanded') ? 'Collapse' : 'Expand';
        
        // Toggle between weekly and monthly view
        const weeklyView = calendarWrapper.querySelector('.weekly-view');
        const monthlyView = calendarWrapper.querySelector('.monthly-view');
        
        if (weeklyView && monthlyView) {
          weeklyView.classList.toggle('hidden');
          monthlyView.classList.toggle('hidden');
        }
      });
    }
  }

  // Call setupCalendarExpand on initial load and after each navigation
  setupCalendarExpand();

  // Call setupCalendar and calculateStreak on initial load and after each navigation
  setupCalendar();
  calculateStreak();

  // Set up a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        setupCalendar();
        calculateStreak();
        setupCalendarExpand();
        break;
      }
    }
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });

  // Add any other functionalities here...
}