//diferencia entre :
// var
// let
// const
 var numero = 7;
 if (true) {
   numero = 11;
 }
 // console.log(numero); // print 11


let mensaje  = "hola"
if (true) {
  let  mensaje = "decir adios";
}
// console.log(mensaje); //print hola, debido a que let funciona en un contexto dado

const PI = 3.14;
// console.log(PI);


let nombre:string  = "Pedro Pablo";
let numeroTwo:number = 123;
let booleano:boolean = true;
let hoy = new Date();

// console.log(hoy);
let cualquiera:any;
cualquiera = nombre; console.log(cualquiera);
cualquiera = numeroTwo; console.log(cualquiera);
cualquiera = booleano; console.log(cualquiera);

//template literales
let nombree:string = "Jorge";
let apellido:string = "Tito";
let fechaNacimiento:number = 2000;

// let texto = `Welcome, ${nombree} ${apellido}
// ${fechaNacimiento}`;
// console.log(texto);]




//funciones y Parametros obigatorio, por defecto y opcionales

function mandarSaludo(origen:string,llegada:string="Escuela CS", valor?:string){
    if(valor){
        console.log(`${origen} manda saludos a ${llegada} con el valor de ${valor}`)
    }else{
        console.log(`${origen} manda saludos a ${llegada}.`)
    }
}
mandarSaludo("Pedro");// Pedro manda saludos a Escuela CS

mandarSaludo("Pedro","Director de CS");//Pedro manda saludos a Director de CS.

mandarSaludo("Pedro","Director de CS","Responsabilidad");//Pedro manda saludos a Director de CS con el valor de Responsabilidad















//end
