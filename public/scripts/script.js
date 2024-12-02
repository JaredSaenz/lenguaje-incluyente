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
document.addEventListener('DOMContentLoaded', function () {
    const toggleLentesButton = document.getElementById('toggle-lentes');
    const textosOriginales = [];

    for (let i = 1; i <= 7; i++) {
        const ejemploParrafo = document.getElementById(`ejemplo-parrafo-${i}`);

        if (ejemploParrafo != null) {
            textosOriginales.push(ejemploParrafo.textContent);
            console.log('iteración:', i);

            // Función para aplicar correcciones al párrafo
            function aplicarCorrecciones(texto) {
                let listaCorregir = [];
                let listaCorreccion = [];

                // Asignar listas según el valor de i
                if (i === 1) {
                    listaCorregir = ['Los empleados organizan', 'uno', 'los encargados'];
                    listaCorreccion = ['El personal organiza', 'persona', 'los encargados y las encargadas'];
                } else if (i === 2) {
                    listaCorregir = ['Será el juez el que lo determine', 'cada jefe'];
                    listaCorreccion = ['Quién juzgue lo determinará', 'las jefaturas'];
                } else if (i === 3) {
                    listaCorregir = ['Los', 'al hombre', 'uno'];
                    listaCorreccion = ['Las y los', 'a la humanidad', 'cualquiera'];
                } else if (i === 4) {
                    listaCorregir = ['ingeniero/a'];
                    listaCorreccion = ['profesional de la ingeniería (o ingenieras e ingenieros)'];
                } else if (i === 5) {
                    listaCorregir = ['presidente','senador','las maestras'];
                    listaCorreccion = ['presidenta','senadora','el personal docente'];
                } else if (i === 6) {
                    listaCorregir = ['de Pérez'];
                    listaCorreccion = ['Gómez'];
                } else if (i === 7) {
                    listaCorregir = ['l@s funcionari@s'];
                    listaCorreccion = ['las y los funcionarios'];
                } 

                // Iterar sobre las listas de corrección y aplicar las sustituciones
                for (let j = 0; j < listaCorregir.length; j++) {
                    const expresionRegular = new RegExp(listaCorregir[j], 'g');
                    texto = texto.replace(
                        expresionRegular,
                        `<span class="correccion" title="Sugerencia: ${listaCorreccion[j]}">
                            <del>${listaCorregir[j]}</del> ${listaCorreccion[j]}
                        </span>`
                    );
                }

                return texto;
            }

            const textoOriginal = textosOriginales[i - 1];

            // Toggle para activar/desactivar los lentes violeta
            toggleLentesButton.addEventListener('click', function () {
                ejemploParrafo.classList.toggle('lentes-activos');
                const img = this.querySelector('img');

                if (ejemploParrafo.classList.contains('lentes-activos')) {
                    // Mostrar el texto corregido cuando los lentes violeta están activos
                    ejemploParrafo.innerHTML = aplicarCorrecciones(textoOriginal);
                    img.src = 'public/images/gafas_violeta.webp';
                    this.setAttribute('aria-label', 'Desactivar lentes violeta');
                } else {
                    // Restaurar el texto original cuando los lentes violeta no están activos
                    ejemploParrafo.innerHTML = textoOriginal;
                    img.src = 'public/images/gafas_violeta.webp';
                    this.setAttribute('aria-label', 'Activar lentes violeta');
                }
            });
        }
    }
});

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

    // Resto del código JavaScript existente...
});
