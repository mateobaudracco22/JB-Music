const filtros = document.querySelectorAll('.filtro');
const secciones = document.querySelectorAll('[data-tipo]');
const items = document.querySelectorAll('.item');
const buscador = document.getElementById('buscador');
const botonesPlay = document.querySelectorAll('.play');

// Filtros: Todo / Playlists / Artistas / Canciones
filtros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        filtros.forEach(function (f) {
            f.classList.remove('activo');
        });
        boton.classList.add('activo');

        const filtro = boton.dataset.filtro;

        secciones.forEach(function (seccion) {
            if (filtro === 'todo' || seccion.dataset.tipo === filtro) {
                seccion.style.display = 'block';
            } else {
                seccion.style.display = 'none';
            }
        });
    });
});

// Buscador
buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();

    items.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(texto)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Botones de play: cambia ▶ por ⏸
botonesPlay.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const estabaSonando = boton.textContent.trim() === '⏸';

        botonesPlay.forEach(function (b) {
            b.textContent = '▶';
        });

        if (!estabaSonando) {
            boton.textContent = '⏸';
        }
    });
});