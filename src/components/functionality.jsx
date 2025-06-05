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


  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });

  // Add any other functionalities here...
}