const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Detiene la recarga
        formulario.classList.add('completado'); // Oculta la cortina negra
        document.body.classList.add('formulario-aprobado'); // Libera el contenido musical
    });