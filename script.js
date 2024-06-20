// script.js
const calendarGrid = document.getElementById('calendarGrid');
const currentMonthElement = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();

// Render calendar
renderCalendar(currentMonth, currentYear);

// Previous month button click event
prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

// Next month button click event
nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Function to render the calendar for a given month and year
function renderCalendar(month, year) {
  calendarGrid.innerHTML = '';
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  currentMonthElement.textContent = new Date(year, month).toLocaleString('en', { month: 'long', year: 'numeric' });

  // Render days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar-day');
    dayElement.textContent = day;
    calendarGrid.appendChild(dayElement);
  });

  // Render empty cells for the beginning of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('div');
    emptyDayElement.classList.add('calendar-day');
    calendarGrid.appendChild(emptyDayElement);
  }

  // Render days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar-day');
    dayElement.textContent = i;
    if (i === currentDay && month === currentMonth && year === currentYear) {
      dayElement.classList.add('current-date');
    }
    calendarGrid.appendChild(dayElement);
  }
}
