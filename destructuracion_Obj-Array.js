"use strict";
//DESTRUCTURACION DE OBJETOS
var musica = {
    nameMusica: "Ella y yo antes",
    categoria: "Regueton",
    vistas: 1000
};
var alias = musica.nameMusica, categoria = musica.categoria, vistas = musica.vistas;
// let names = musica.nombre;
// let category = musica.categoria;
// let view = musica.vistas;
console.log(alias, categoria, vistas);
// DESTRUCTURACION DE AREGLOS
var cartasCLashRoyale = ["Pekka", "Mago de Hielo", "MAgo de fuego"];
var pe = cartasCLashRoyale[0], mh = cartasCLashRoyale[1], mf = cartasCLashRoyale[2];
console.log(mf, mh, pe);
