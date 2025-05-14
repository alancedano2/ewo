// Este script puede ser para el control del carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function nextSlide() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.display = 'block';
}

function prevSlide() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].style.display = 'block';
}

// Mostrar el primer slide
items[currentIndex].style.display = 'block';

// Cambiar cada 5 segundos
setInterval(nextSlide, 5000);
