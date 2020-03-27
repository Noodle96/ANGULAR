//diferencia entre :
// var
// let
// const
 var numero = 7;
 if (true) {
   numero = 11;
 }
 console.log(numero); // print 11


let mensaje  = "hola"
if (true) {
  let  mensaje = "decir adios";
}
console.log(mensaje); //print hola, debido a que let funciona en un contexto dado

const PI = 3.14;
console.log(PI);
