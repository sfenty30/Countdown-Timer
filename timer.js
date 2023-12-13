// Set the target date and time for the countdown (e.g., December 31, 2023 23:59:59)
const targetDate = new Date('December 31, 2023 23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').textContent = days + 'd ';
  document.getElementById('hours').textContent = hours + 'h ';
  document.getElementById('minutes').textContent = minutes + 'm ';
  document.getElementById('seconds').textContent = seconds + 's ';

  // If the countdown is finished, display a message
  if (remainingTime < 0) {
    clearInterval(countdown);
    document.getElementById('timer').textContent = 'Countdown Finished';
  }
}, 1000);
