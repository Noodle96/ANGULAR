//DESTRUCTURACION DE OBJETOS

let musica = {
    nameMusica: "Ella y yo antes",
    categoria: "Regueton",
    vistas: 1000
}

let {nameMusica:alias, categoria, vistas} = musica;

// let names = musica.nombre;
// let category = musica.categoria;
// let view = musica.vistas;

console.log(alias,categoria,vistas);



// DESTRUCTURACION DE AREGLOS
let cartasCLashRoyale:string[]= ["Pekka","Mago de Hielo","MAgo de fuego"] ;
let [pe,mh,mf] = cartasCLashRoyale;
console.log(mf,mh,pe);
