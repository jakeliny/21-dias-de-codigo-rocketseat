const switchThemeButton = document.querySelector('#switch-theme-button');

switchThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});