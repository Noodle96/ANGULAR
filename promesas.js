"use strict";
//PROMESAS EN EMACSCRIPT6
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //Termina bien
        //resolve();
        //Termina mal
        reject();
    }, 1500);
});
console.log("Mensaje1");
prom1.then(function () {
    console.log("Ejecutar cuando se termine bien");
}, function () {
    console.error("Ejecutar cuando este mal");
});
console.log("Mensaje2");
