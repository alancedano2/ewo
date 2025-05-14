document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-container");
  let index = 0;
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  // Cambia el carrusel cada 5 segundos
  setInterval(() => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 5000);
});
