let divId= document.getElementById("padre")
let divId2= document.getElementById("container")
let boton= document.getElementById("boton")
const parrafo = document.createElement("p");
const textoParrafo = document.createTextNode("Con createElement agreagamos este parrafo al DIV container");
const elementoPadre = document.querySelector("#container")

boton.addEventListener("click", texto)
boton.addEventListener("click", texto2)

function texto() {
    divId.innerHTML = "Con getElementById agregamos este texto"
    divId.style.margin = "50px"
    divId.style.background = "aquamarine"
}

function texto2() {
    elementoPadre.appendChild(parrafo);
    parrafo.appendChild(textoParrafo)
    divId2.style.margin = "50px"
    divId2.style.background = "mediumpurple"    
}