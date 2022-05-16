var palabras = ["perro", "gato", "avion", "casa", "pelota"];

function agregarPalabra(){
    let input = document.querySelector("input").value;
    if (!palabras.includes(input) && (input != "") ) {
        palabras.push(input);
        document.querySelector("input").value = "";      
    } else if (input == ""){
        alert("Campo vacio. Ingrese una palabra");
    } else {
        alert("Palabra ya existente, intente con otra");
    }
}

agregar.addEventListener("click", agregarPalabra);



function selecPalabra(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    return palabra;
}

init.addEventListener("click", selecPalabra);

