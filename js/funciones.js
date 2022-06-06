
// array con palabras predeterminadas
var palabras = ["PERRO", "GATO", "AVION", "CASA", "PELOTA", "CABALLO", "MESA"];

/*------------------------------------------------------------------------------*/


// declaracion de variables
var newLocal = JSON.parse(localStorage.getItem("palabras"));
let keyValue;
let palabra =  newLocal[Math.round(Math.random()*(newLocal).length)];
let index = 0; 
let cuerpo = document.getElementsByClassName("cuerpo");
/*------------------------------------------------------------------------------*/


// funcion reemplazar
String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
}
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


// funcion para seleccionar palabra aleatoria para el juego
function seleccionarPalabra(){
    palabra =  newLocal[Math.round(Math.random()*(newLocal).length)];
    return palabra;
}
/*------------------------------------------------------------------------------*/


// funcion para reemplazar con guiones palabra seleccionada
function reemplazarConGuion(){
    let palabraConGuiones = seleccionarPalabra().replace(/./g, "_ ");
    return palabraConGuiones;
} 
/*------------------------------------------------------------------------------*/


// funcion para mostrar en pantalla palabra seleccionada y con guiones
function mostrarEnPantalla(){
    document.querySelector(".caja-secreto").innerHTML = reemplazarConGuion();
}
/*------------------------------------------------------------------------------*/


// funcion salir del juego
function salirDelJuego(){
    let mensaje = confirm("Esta seguro que quiere abandonar el juego?");
    if(mensaje){
        return window.location.href = 'http://127.0.0.1:5500/index.html';
    }; 
}
/*------------------------------------------------------------------------------*/


// funcion para verificar letra tecleada
function validarLetra(){
    document.addEventListener('keydown', (event) => {
    keyValue = event.key;
    let regexp = /^[A-Z]+$/g;
    if (regexp.test(keyValue)) {
        console.log(keyValue);
        if(dibujarLetraCorrecta()){
        mensajeGanador();
        }else{
            dibujarLetraIncorrecta();
            dibujarHorca();
            mensajePerdedor();
        }
    }else{
        alert("Solo se puede juegar con mayúsculas");
    }
  });
}
/*------------------------------------------------------------------------------*/


// funcion para comprobar que la letra tecleada sea la correcta
function dibujarLetraCorrecta(){
    let letraCorrecta = document.querySelector(".caja-secreto");
    let correcto = false;
    for (const i in palabra) {
        if(keyValue == palabra[i]){
            letraCorrecta.innerHTML = letraCorrecta.textContent.replaceAt(i*2, keyValue);
            correcto = true;
        }; 
    };
    return correcto;
}
/*------------------------------------------------------------------------------*/


// funcion para agregar letra incorrecta al span de letras incorrectas
function dibujarLetraIncorrecta(){
    let letraIncorrecta = document.querySelector(".caja-error");
    if(index < letraIncorrecta.textContent.length){
        letraIncorrecta.innerHTML = letraIncorrecta.textContent.replaceAt(index, keyValue);
    }
}
/*------------------------------------------------------------------------------*/


// funcion para verificar fin del juego
function verificarFinJuego(){
    let perdedor = false;
    if(document.querySelector(".caja-error").textContent.indexOf('_') <0){
        perdedor = true;
        return  perdedor;
    } else {
        return perdedor;
    };
}
/*------------------------------------------------------------------------------*/


// funcion para mostrar mensaje para fin del juego
function mensajePerdedor(){
    if (verificarFinJuego()) {
        document.querySelector("#perdedor").style.display = "flex";
        setTimeout(() => {
            reiniciarJuego();
        },  5000);
    };
}
/*------------------------------------------------------------------------------*/


// funcion para verificar ganador
function verificarGanador(){
    let ganador = false;
    if(document.querySelector(".caja-secreto").textContent.indexOf('_') <0){
        ganador = true;
        return  ganador;
    } else {
        return ganador;
    };
}
/*------------------------------------------------------------------------------*/


// funcion para mostrar mensaje ganador
function mensajeGanador(){
    if (verificarGanador()) {
        document.querySelector("#ganador").style.display = "flex";
        setTimeout(() => {
            reiniciarJuego();
        },  5000);
    };
}
/*------------------------------------------------------------------------------*/


// funcion para dibujar horca por cada error que cometa el jugador
function dibujarHorca(){
    if (index < cuerpo.length) {
        cuerpo.item(index).style.display = "flex";
        index++;
    }; 
}
/*------------------------------------------------------------------------------*/


// funcion para reinicar juego
function reiniciarJuego(){
    window.location.href = 'http://127.0.0.1:5500/pantallajuego.html';
}
/*------------------------------------------------------------------------------*/