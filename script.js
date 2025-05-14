let index = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide() {
  index = (index + 1) % slides.length;
  document.querySelector('.carousel-wrapper').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 15000); // 15 segundos
