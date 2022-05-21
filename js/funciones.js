
// array con palabras predeterminadas
var palabras = ["PERRO", "GATO", "AVION", "CASA", "PELOTA", "CABALLO", "MESA"];

/*------------------------------------------------------------------------------*/

var newLocal = JSON.parse(localStorage.getItem("palabras"));

let palabra;

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
    return newLocal;
}

let agregar = document.querySelector("#agregar");
agregar.addEventListener("click", agregarPalabra);
/*------------------------------------------------------------------------------*/


// funcion para seleccionar palabra aleatoria para el juego
function seleccionarPalabra(){
    palabra =  newLocal[Math.round(Math.random()*(newLocal).length)];
    return palabra;
}
/*------------------------------------------------------------------------------*/


// funcion para reemplazar con guiones palabra seleccionada
function reemplazarConGuion(){
    let palabraConGuiones = seleccionarPalabra().replace(/./g, "_ ");
    return palabraConGuiones
} 
/*------------------------------------------------------------------------------*/


// funcion para mostrar en pantalla palabra seleccionada y con guiones
function mostrarEnPantalla(){
    document.querySelector(".caja-secreto").innerHTML = reemplazarConGuion();
}
// let init = document.querySelector("#init");
// init.addEventListener("click", mostrarEnPantalla());
/*------------------------------------------------------------------------------*/


// funcion salir del juego
function salirDelJuego(){
    let mensaje = confirm("Esta seguro que quiere abandonar el juego?")
    if(mensaje){
        return window.location.href = 'http://127.0.0.1:5500/index.html';
    } 
}
let cancel = document.querySelector("#cancel");
cancel.addEventListener("click", salirDelJuego);
/*------------------------------------------------------------------------------*/

var keyValue;
// funcion para verificar letra tecleada
function validarLetra(){
    document.addEventListener('keydown', (event) => {
    keyValue = event.key;
    let regexp = /^[a-zA-Z]+$/g;
    if (regexp.test(keyValue)) {
        return console.log(keyValue);
    } else {
        return alert("caracter no permitido, solo letras");
    }
  });
};
/*------------------------------------------------------------------------------*/

//   caja.outerText.charAt()


// let contadorFallos = 0;
// document.querySelector("#init").addEventListener("click", () =>{
    
//     // let haFallado = true;
//     for(const i in palabra){
//         if(keyValue == palabra[i]){
//             palabraSinGuiones = palabra.replace(i, keyValue)
//             console.log(palabraSinGuiones)
//         }
//     }
// })

// if (haFallado) {
//     contadorFallos++;
//     // incorporar imagenes
//     if (contadorFallos == 4) {
//         alert("perdites")
//     }
// }else {
//     if (palabraConGuion.indexof('_') <0) {
//         alert("victoria");
//     }
// }
// document.querySelector("").innerHTML = palabraConGuion;

// document.querySelector().value = '';
// document.querySelector().focus();


function dibujarLetraCorrecta(){
    for (const i of palabra) {
        if(keyValue == palabra[i]){
            document.querySelector(".caja-secreto").innerHTML = palabra.replace(i*2, keyValue)
        }
    }
}

function dibujarLetraIncorrecta(){

}

