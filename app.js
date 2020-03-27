"use strict";
//diferencia entre :
// var
// let
// const
var numero = 7;
if (true) {
    numero = 11;
}
// console.log(numero); // print 11
var mensaje = "hola";
if (true) {
    var mensaje_1 = "decir adios";
}
// console.log(mensaje); //print hola, debido a que let funciona en un contexto dado
var PI = 3.14;
// console.log(PI);
var nombre = "Pedro Pablo";
var numeroTwo = 123;
var booleano = true;
var hoy = new Date();
// console.log(hoy);
var cualquiera;
cualquiera = nombre;
console.log(cualquiera);
cualquiera = numeroTwo;
console.log(cualquiera);
cualquiera = booleano;
console.log(cualquiera);
//template literales
var nombree = "Jorge";
var apellido = "Tito";
var fechaNacimiento = 2000;
// let texto = `Welcome, ${nombree} ${apellido}
// ${fechaNacimiento}`;
// console.log(texto);]
//funciones y Parametros obigatorio, por defecto y opcionales
function mandarSaludo(origen, llegada, valor) {
    if (llegada === void 0) { llegada = "Escuela CS"; }
    if (valor) {
        console.log(origen + " manda saludos a " + llegada + " con el valor de " + valor);
    }
    else {
        console.log(origen + " manda saludos a " + llegada + ".");
    }
}
mandarSaludo("Pedro"); // Pedro manda saludos a Escuela CS
mandarSaludo("Pedro", "Director de CS"); //Pedro manda saludos a Director de CS.
mandarSaludo("Pedro", "Director de CS", "Responsabilidad"); //Pedro manda saludos a Director de CS con el valor de Responsabilidad
//end
