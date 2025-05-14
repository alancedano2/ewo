document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel-container');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 5000); // Cada 5 segundos cambia la imagen
});
