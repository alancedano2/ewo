document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel-container');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  let index = 0;

  // Función que cambia el índice para mostrar el siguiente item del carrusel
  function moveToNextSlide() {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;  // Mueve el carrusel
  }

  // Cambiar de imagen cada 5 segundos
  setInterval(moveToNextSlide, 5000);
});
