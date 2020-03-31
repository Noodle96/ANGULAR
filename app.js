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
cualquiera = nombre; //console.log(cualquiera);
cualquiera = numeroTwo; // console.log(cualquiera);
cualquiera = booleano; //console.log(cualquiera);
//template literales
var nombree = "Jorge";
var apellido = "Tito";
var fechaNacimiento = 2000;
// let texto = `Welcome, ${nombree} ${apellido}
// ${fechaNacimiento}`;
// console.log(texto);]
//funciones y Parametros obigatorio, por defecto y op// FUNCIONES FLECHAcionales
function mandarSaludo(origen, llegada, valor) {
    if (llegada === void 0) { llegada = "Escuela CS"; }
    if (valor) {
        //console.log(`${origen} manda saludos a ${llegada} con el valor de ${valor}`)
    }
    else {
        // console.log(`${origen} manda saludos a ${llegada}.`)
    }
}
mandarSaludo("Pedro"); // Pedro manda saludos a Escuela CS
mandarSaludo("Pedro", "Director de CS"); //Pedro manda saludos a Director de CS.
mandarSaludo("Pedro", "Director de CS", "Responsabilidad"); //Pedro manda saludos a Director de CS con el valor de Responsabilidad
// FUNCIONES FLECHA
var miFuncion1 = function (nombre) {
    return nombre;
};
var miFuncion1F = function (a) { return a; };
// console.log(miFuncion1("Normal"));
// console.log(miFuncion1F("Flechas"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
// console.log(miFuncion2(2,4));
// console.log(miFuncion2F(20,40));
var miFuncion3 = function (a) {
    a = a.toUpperCase();
    return a;
};
var miFuncion3F = function (a) {
    a = a.toUpperCase();
    return a;
};
// console.log(miFuncion3("saludos"));
// console.log(miFuncion3F("Monos"));
// settimeout test , utilidad de las funciones flechas
//OBJETO CREADO CON UNA FUNCION MIENBRO SIN UTILIZAR FUNCIONES FLECHAS
/*
let princesa = {
    nombre : "Princess Isabel ",
    talk(){
        setTimeout(function(){
            console.log(this.nombre + "say Lets go"); // pedro Pablo say Lets go.
        },1500);
    }
}*/
//princesa.talk(); // esto buscara una variable nombre fuera del contexto.
//OBBJETO CREADO CON UNA FUNCION MIEMBRO UTILIZANDO FUNCIONES MIENBRO.
var princesa = {
    nombre: "Princess Isabel ",
    talk: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + "say Lets go"); // esto imprimira Princesa Isabel say Lets go.
        }, 1500);
    }
};
princesa.talk(); // esto imprimira Princesa Isabel say Lets go.
//end
