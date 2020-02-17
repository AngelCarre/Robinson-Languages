document.addEventListener("DOMContentLoaded", inicio);

function inicio() {

    logos = document.querySelectorAll(".logo");

    for (var i = 0; i < logos.length; i++) {
        logos[i].addEventListener("mouseover", mostrarTexto, true);
        logos[i].addEventListener("mouseout", ocultarTexto, true);
    };
    document.querySelector("#botonEntrar").addEventListener("click", function () {
        document.querySelector("#inicioSesion").style.display = "block";
    });
    document.querySelector(".imgCerrar").addEventListener("click", function(){
        document.querySelector("#inicioSesion").style.display = "none";
    });
}

function mostrarTexto() {
    this.style.width = "290px";
    this.style.height = "290px";
    this.style.transition = "0.5s";
    this.style.borderRadius = "40px";
    this.style.backgroundColor = "hsla(225, 100%, 82%, 0.5)";
    this.querySelector("p").style.display = "block";
    this.querySelector("img").style.opacity = "0.2";
    this.querySelector("img").style.height = "300px";
    this.querySelector("img").style.width = "300px";
    this.querySelector("img").style.transition = "0.5s";
}

function ocultarTexto() {
    this.style.width = "200px";
    this.style.height = "200px";
    this.style.transition = "0.2s";
    this.style.backgroundColor = "";
    this.style.opacity = "1";
    this.querySelector("p").style.display = "none";
    this.querySelector("img").style.height = "200px";
    this.querySelector("img").style.width = "200px";
    this.querySelector("img").style.transition = "0.2s";
    this.querySelector("img").style.opacity = "1";
}
