const botonSesion = document.getElementById('botonSesion');
const nombreUsuario = localStorage.getItem('nombreUsuario');

if (nombreUsuario) {
    botonSesion.querySelector('span').textContent = 'Cerrar sesión';
    document.querySelector('.avatar').textContent = nombreUsuario.charAt(0).toUpperCase();

    botonSesion.addEventListener('click', function (evento) {
        evento.preventDefault();
        localStorage.removeItem('nombreUsuario');
        window.location.href = 'formulario.html';
    });
}