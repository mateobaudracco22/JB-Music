const formulario = document.getElementById('formularioLogin');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const nombre = document.getElementById('nom').value;
    localStorage.setItem('nombreUsuario', nombre);
    window.location.href = 'nuevo_index.html';
});