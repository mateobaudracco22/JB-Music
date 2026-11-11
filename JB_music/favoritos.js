const lista = document.getElementById('listaFavoritos');
const contador = document.getElementById('contador');
const vacio = document.getElementById('vacio');
const buscador = document.getElementById('buscador');

// Actualiza el número de favoritos y el mensaje de lista vacía
function actualizarContador() {
    const total = lista.querySelectorAll('.fav-item').length;
    contador.textContent = total;

    if (total === 0) {
        vacio.style.display = 'block';
    } else {
        vacio.style.display = 'none';
    }
}

// Quitar una canción al tocar el corazón
lista.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('quitar')) {
        evento.target.parentElement.remove();
        actualizarContador();
    }
});

// Buscador
buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();

    lista.querySelectorAll('.fav-item').forEach(function (cancion) {
        if (cancion.textContent.toLowerCase().includes(texto)) {
            cancion.style.display = 'flex';
        } else {
            cancion.style.display = 'none';
        }
    });
});

actualizarContador();