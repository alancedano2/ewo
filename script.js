let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  }
  document.querySelector('.carousel-wrapper').style.transform = `translateX(-${100 * currentSlide}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 15000); // Cambiar cada 15 segundos
