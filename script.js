let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function moveSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 15000); // 15s por slide
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
  setTimeout(autoSlide, 15000);
});
