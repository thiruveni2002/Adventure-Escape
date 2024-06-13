document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('rsvpForm');
  const confirmationMessage = document.querySelector('.confirmation-message');
  const attendeeCountElement = document.getElementById('attendeeCount');
  const countdownElement = document.getElementById('countdown');
  const socialIcons = document.querySelector('.social-icons');
  
  // Load the selected theme
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    document.body.style.backgroundImage = `url('${selectedTheme}')`;
  }

  let attendees = 0;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
      attendees += 1;
      attendeeCountElement.textContent = `Attendees: ${attendees}`;
      confirmationMessage.style.display = 'block';
      form.reset();
      socialIcons.style.display = 'flex';

      setTimeout(() => {
        confirmationMessage.style.display = 'none';
      }, 3000);
    }
  });

  function updateCountdown() {
    const eventDate = new Date('July 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdownElement.textContent = "The event has started!";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
