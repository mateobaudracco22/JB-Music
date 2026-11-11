const lista = document.getElementById('listaNotificaciones');
const notificaciones = lista.querySelectorAll('.notificacion');
const contador = document.getElementById('contador');
const botonTodas = document.getElementById('marcarTodas');
const buscador = document.getElementById('buscador');

// Cuenta cuántas notificaciones siguen sin leer
function actualizarContador() {
    const sinLeer = lista.querySelectorAll('.nueva').length;
    contador.textContent = sinLeer;
}

// Al hacer click en una, se marca como leída
notificaciones.forEach(function (notificacion) {
    notificacion.addEventListener('click', function () {
        notificacion.classList.remove('nueva');
        actualizarContador();
    });
});

// Marcar todas como leídas
botonTodas.addEventListener('click', function () {
    notificaciones.forEach(function (notificacion) {
        notificacion.classList.remove('nueva');
    });
    actualizarContador();
});

// Buscador
buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();

    notificaciones.forEach(function (notificacion) {
        if (notificacion.textContent.toLowerCase().includes(texto)) {
            notificacion.style.display = 'flex';
        } else {
            notificacion.style.display = 'none';
        }
    });
});

actualizarContador();