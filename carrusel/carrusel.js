let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 15000); // 15 segundos por slide
}

function changeSlide(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlides();
