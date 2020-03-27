"use strict";
//diferencia entre :
// var
// let
// const
var numero = 7;
if (true) {
    numero = 11;
}
console.log(numero); // print 11
var mensaje = "hola";
if (true) {
    var mensaje_1 = "decir adios";
}
console.log(mensaje); //print hola, debido a que let funciona en un contexto dado
var PI = 3.14;
console.log(PI);
