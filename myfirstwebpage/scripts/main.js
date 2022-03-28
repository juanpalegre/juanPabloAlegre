let miTitulo = document.querySelector("h1")
//miTitulo.textContent = "Hola Mundo"

/*
document.querySelector("html").onclick = function () {
    alert("Deja de pincharme!")
}
*/

let button = document.querySelector("button")

function establecerNombreDeUsuario(){
    let name = prompt("Por favor, ingresa tu nombre de usuario");
    localStorage.setItem("name", name);
    miTitulo.textContent = "Bienvenido " + name;
}

if (!localStorage.getItem("name")){
    establecerNombreDeUsuario()
}
else {
    let savedName = localStorage.getItem("name");
    miTitulo.textContent = "Bienvenido " + savedName
}

button.onclick = function () {
    establecerNombreDeUsuario()
}