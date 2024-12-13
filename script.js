let slideIndex = 0;

// Función para mover el carrusel hacia adelante o atrás
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    // Calculamos el índice de la siguiente imagen
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;

    // Calculamos la distancia a la que debemos mover el carrusel
    const offset = -slideIndex * 100;

    // Aplicamos la transformación CSS para mover el carrusel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;
}

// Opcional: para que los botones se muestren desde el inicio (en caso de que desees poner un valor predeterminado).
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));




