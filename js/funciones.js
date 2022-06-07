
// array con palabras predeterminadas
var palabras = ["PERRO", "GATO", "AVION", "CASA", "PELOTA", "CABALLO", "MESA"];
/*------------------------------------------------------------------------------*/


// declaracion de variables
var newLocal = JSON.parse(localStorage.getItem("palabras"));
let palabra =  newLocal[Math.round(Math.random()*(newLocal).length)];
/*------------------------------------------------------------------------------*/


// funcion para validar la palabra que se coloque en el input.
function validarPalabra(){
    let regexp = /^[A-Z]+$/g;
    let input = document.querySelector("input").value;
    let validar = false;
    if (regexp.test(input)) {
        validar = true;
    } 
    return validar;
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
    return newLocal;
}

let agregar = document.querySelector("#agregar");
agregar.addEventListener("click", agregarPalabra);
/*------------------------------------------------------------------------------*/


