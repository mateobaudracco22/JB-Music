const modoPro = document.querySelector("#menu-toggle");

modoPro.addEventListener("change", function() {
if (modoPro.checked) {
document.body.classList.add("modo-pro");
} else {
document.body.classList.remove("modo-pro");
}
});

const favoritos = document.querySelectorAll(".boton-favorito");

for (let i = 0; i < favoritos.length; i++) {


favoritos[i].addEventListener("click", function() {

    if (favoritos[i].textContent == "♡ Agregar a favoritos") {
        favoritos[i].textContent = "♥ En favoritos";
        favoritos[i].classList.add("activo");
    } else {
        favoritos[i].textContent = "♡ Agregar a favoritos";
        favoritos[i].classList.remove("activo");
    }

});

}

const botones = document.querySelectorAll(".boton-enviar");

for (let i = 0; i < botones.length; i++) {


botones[i].addEventListener("click", function() {

    let input = document.querySelectorAll(".input-comentario")[i];
    let lista = document.querySelectorAll(".lista-comentarios")[i];

    if (input.value == "") {
        alert("Escribí un comentario.");
    } else {

        let comentario = document.createElement("p");

        comentario.textContent = input.value;
        comentario.className = "comentario";

        lista.appendChild(comentario);

        input.value = "";
    }

});


}

const audios = document.querySelectorAll("audio");

for (let i = 0; i < audios.length; i++) {

audios[i].addEventListener("play", function() {

    for (let j = 0; j < audios.length; j++) {

        if (i != j) {
            audios[j].pause();
        }

    }

});

}

document.querySelector("#actividad").addEventListener("click", function() {
alert("Próximamente podrás ver tu actividad.");
});

document.querySelector("#notificaciones").addEventListener("click", function() {
alert("No tienes nuevas notificaciones.");
});

document.querySelector("#favoritos").addEventListener("click", function() {
alert("Aquí aparecerán tus canciones favoritas.");
});