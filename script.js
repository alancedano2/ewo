let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
showSlides();

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  updateSlides();
}

function showSlides() {
  updateSlides();
  setTimeout(showSlides, 15000); // 15 segundos
}

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
