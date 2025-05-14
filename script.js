let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const wrapper = document.querySelector('.carousel-wrapper');
const total = slides.length;

function showSlide(idx) {
  index = (idx + total) % total;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next-btn').addEventListener('click', () => {
  showSlide(index + 1);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  showSlide(index - 1);
});

setInterval(() => {
  showSlide(index + 1);
}, 15000);
