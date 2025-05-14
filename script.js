let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let timer;

function showSlides(n) {
  clearTimeout(timer);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  slides[slideIndex].style.display = "block";
  timer = setTimeout(() => showSlides(slideIndex + 1), 15000);
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
