const btnEl = document.querySelector(".btn");
const btn2El = document.querySelector(".close-dd");
const videoEl = document.querySelector("video");
const trailerContainerEl = document.querySelector(".trailer-container");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

btn2El.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
