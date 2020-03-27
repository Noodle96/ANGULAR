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
var nombre = "Pedro Pablo";
var numeroTwo = 123;
var booleano = true;
var hoy = new Date();
console.log(hoy);
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
var texto = "Welcome, " + nombree + " " + apellido + "\n" + fechaNacimiento;
console.log(texto);
