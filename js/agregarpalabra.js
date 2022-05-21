// var palabras = ["PERRO", "GATO", "AVION", "CASA", "PELOTA", "CABALLO", "MESA"];

// localStorage.setItem("palabras", JSON.stringify(palabras));
// // const newLocal = JSON.parse(localStorage.getItem("palabras"));

// // function agregarPalabra(){
// //     let input = document.querySelector("input").value;
// //     if (!palabras.includes(input) && input != "") {
// //         palabras.push(input);
// //         localStorage.setItem("palabras", JSON.stringify(palabras));
// //         document.querySelector("input").value = "";      
// //     } else if (input == ""){
// //         alert("Campo vacio. Ingrese una palabra");
// //     } else {
// //         alert("Palabra ya existente, intente con otra");
// //     }
// // }


// function agregarPalabra() {
//     let input = document.querySelector("input").value;
//     if (validarPalabra()) {
//         palabras.push(input);
//         localStorage.setItem("palabras", JSON.stringify(palabras));
//         document.querySelector("input").value = "";   
//     } else {
//         alert("Entrada incorrecta");
//     }
// }

// let agregar = document.querySelector("#agregar");
// agregar.addEventListener("click", agregarPalabra);



// function selecPalabra(){
//     let palabra =  JSON.parse(localStorage.getItem("palabras"))[Math.floor(Math.random()*(JSON.parse(localStorage.getItem("palabras"))).length)];
//     return palabra;
// }
// let init = document.querySelector("#init");
// init.addEventListener("click", selecPalabra);

// // document.querySelector(".caja-secreto").innerHTML = JSON.parse(localStorage.getItem("palabras"))[Math.floor(Math.random()*(JSON.parse(localStorage.getItem("palabras"))).length)];

// //document.querySelector(".caja-princ").innerHTML = masPalabras[Math.floor(Math.random()*masPalabras.length)];



// function validarPalabra(){
//     let regexp = /^[A-Z]+$/g;
//     let input = document.querySelector("input").value;
//     let validar = false;
//     if (regexp.test(input)) {
//         validar = true;
//     } 
//     return validar
// }



// function reemplazarConGuion(){
//     let palabraConGuiones = selecPalabra().replace(/./g, " _ ");
//     return palabraConGuiones
// }


// function mostrarEnPantalla(){
//     document.querySelector(".caja-secreto").innerHTML = reemplazarConGuion();
// }