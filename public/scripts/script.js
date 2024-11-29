document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const contentSections = document.querySelectorAll('.content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Show target content and hide others
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

// Añadir este código al archivo JavaScript existente

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-nav .prev');
    const nextButton = document.querySelector('.carousel-nav .next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Navegación con teclado
    carousel.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            showNextSlide();
        } else if (e.key === 'ArrowLeft') {
            showPrevSlide();
        }
    });

    // Hacer el carrusel focusable para la navegación con teclado
    carousel.setAttribute('tabindex', '0');

    // Actualizar ARIA labels para accesibilidad
    function updateAriaLabels() {
        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== currentIndex);
        });
    }

    // Llamar a updateAriaLabels inicialmente y después de cada cambio de slide
    updateAriaLabels();
    nextButton.addEventListener('click', updateAriaLabels);
    prevButton.addEventListener('click', updateAriaLabels);
});

// Añadir este código al final del archivo JavaScript existente

document.addEventListener('DOMContentLoaded', function() {
    const tipsList = document.getElementById('tips-list');
    const toggleLentesButton = document.getElementById('toggle-lentes');
    const ejemploParrafo = document.getElementById('ejemplo-parrafo');

    // Tips y recomendaciones
    const tips = [
        "Usa términos neutros o inclusivos como 'personas' en lugar de 'hombres'.",
        "Evita el uso del masculino genérico para referirte a grupos mixtos.",
        "Utiliza el desdoblamiento de género con moderación (ej. 'trabajadoras y trabajadores').",
        "Emplea estrategias como la omisión del sujeto o el uso de pronombres neutros.",
        "Presta atención a los estereotipos de género en tus ejemplos e ilustraciones."
    ];

    // Cargar tips dinámicamente
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Función para aplicar correcciones al párrafo
    function aplicarCorrecciones(texto) {
        return texto
            .replace(/Los empleados/g, '<span class="correccion" title="Sugerencia: El personal">Los empleados</span>')
            .replace(/sus jefes/g, '<span class="correccion" title="Sugerencia: la dirección">sus jefes</span>')
            .replace(/Cada uno/g, '<span class="correccion" title="Sugerencia: Cada persona">Cada uno</span>');
    }

    // Toggle para activar/desactivar los lentes violeta
    toggleLentesButton.addEventListener('click', function() {
        ejemploParrafo.classList.toggle('lentes-activos');
        const img = this.querySelector('img');
        if (ejemploParrafo.classList.contains('lentes-activos')) {
            ejemploParrafo.innerHTML = aplicarCorrecciones(ejemploParrafo.textContent);
            img.src = 'public/images/gafas_violeta.webp';
            this.setAttribute('aria-label', 'Desactivar lentes violeta');
        } else {
            ejemploParrafo.innerHTML = ejemploParrafo.textContent;
            img.src = 'public/images/gafas_violeta.webp';
            this.setAttribute('aria-label', 'Activar lentes violeta');
        }
    });
});

