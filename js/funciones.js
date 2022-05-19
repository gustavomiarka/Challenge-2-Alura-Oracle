
// array con palabras por defecto
var palabras = ["PERRO", "GATO", "AVION", "CASA", "PELOTA", "CABALLO", "MESA"];

/*------------------------------------------------------------------------------*/

localStorage.setItem("palabras", JSON.stringify(palabras));
const newLocal = JSON.parse(localStorage.getItem("palabras"));



// funcion para validar la palabra que se coloque en el input.
function validarPalabra(){
    let regexp = /^[A-Z]+$/g;
    let input = document.querySelector("input").value;
    let validar = false;
    if (regexp.test(input)) {
        validar = true;
    } 
    return validar
}
/*------------------------------------------------------------------------------*/


// funcion para agregar palabras al array del juego
function agregarPalabra() {
    let input = document.querySelector("input").value;
    if (validarPalabra()) {
        palabras.push(input);
        localStorage.setItem("palabras", JSON.stringify(palabras));
        document.querySelector("input").value = "";   
    } else {
        alert("Entrada incorrecta");
    }
}

let agregar = document.querySelector("#agregar");
agregar.addEventListener("click", agregarPalabra);
/*------------------------------------------------------------------------------*/


// funcion para seleccionar palabra aleatoria para el juego
function seleccionarPalabra(){
    // let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    let palabra =  newLocal[Math.floor(Math.random()*(newLocal).length)];
    return palabra;
}
/*------------------------------------------------------------------------------*/


// funcion para reemplazar con guiones palabra seleccionada
function reemplazarConGuion (){
    let palabraConGuiones = seleccionarPalabra().replace(/./g, " _ ");
    return palabraConGuiones
}
/*------------------------------------------------------------------------------*/


// funcion para mostrar en pantalla palabra seleccionada y con guiones
function mostrarEnPantalla(){
    document.querySelector(".caja-secreto").innerHTML = reemplazarConGuion();
}
// let init = document.querySelector("#init");
init.addEventListener("click", mostrarEnPantalla());
/*------------------------------------------------------------------------------*/