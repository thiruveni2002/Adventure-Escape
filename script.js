function setTheme(image) {
  localStorage.setItem('selectedTheme', image);
  window.location.href = 'rsvp.html';
}

document.querySelectorAll('.theme-toggle button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 300);
  });
});
