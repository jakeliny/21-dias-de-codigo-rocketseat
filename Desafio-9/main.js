let interval;
let progress = 0;
const progressBar = document.querySelector("#progress-bar");
const startProgressButton = document.querySelector("#start-progress-button");

startProgressButton.addEventListener("click", startProgress);

function startProgress() {
  if (progress != 0) {
    clearProgressBar()
    return;
  }

  interval = setInterval(updateProgressBar, 100);

}

function updateProgressBar() {
  if (progress >= 100) {
    clearInterval(interval);
    startProgressButton.textContent = "Reiniciar";
    return;
  }

  progress++;
  progressBar.style.width = progress + "%";
  progressBar.innerHTML = progress + "%";

}

function clearProgressBar() {
  progress = 0;
  startProgressButton.textContent = "iniciar";
  progressBar.style.width = progress + "%";
  progressBar.innerHTML = progress + "%";
}