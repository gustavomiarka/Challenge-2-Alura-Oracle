// let palabraConGuiones = secretWord.replace(/./g, " _ ");
localStorage.setItem("palabras", JSON.stringify(palabras));
const newLocal = JSON.parse(localStorage.getItem("palabras"));


// function selecPalabra(){
//     let interno = document.querySelector(".caja-secreto").innerHTML;
//     interno = JSON.parse(localStorage.getItem("palabras"))[Math.floor(Math.random()*(JSON.parse(localStorage.getItem("palabras"))).length)];
//     return interno;
// }

// var init = document.querySelector("#init");

// init.addEventListener("click", selecPalabra);
