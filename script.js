let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Automáticamente cambiar el slide cada 5 segundos
setInterval(() => moveSlide(1), 5000);
