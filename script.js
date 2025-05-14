let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function changeSlide() {
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const newTransform = -100 * currentIndex;
  document.querySelector('.carousel-wrapper').style.transform = `translateX(${newTransform}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  changeSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  changeSlide();
});

// Automatic Slide Change (optional)
setInterval(() => {
  currentIndex++;
  changeSlide();
}, 5000);
