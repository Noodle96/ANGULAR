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
cualquiera = nombre; //console.log(cualquiera);
cualquiera = numeroTwo;// console.log(cualquiera);
cualquiera = booleano; //console.log(cualquiera);

//template literales
let nombree:string = "Jorge";
let apellido:string = "Tito";
let fechaNacimiento:number = 2000;

// let texto = `Welcome, ${nombree} ${apellido}
// ${fechaNacimiento}`;
// console.log(texto);]




//funciones y Parametros obigatorio, por defecto y op// FUNCIONES FLECHAcionales

function mandarSaludo(origen:string,llegada:string="Escuela CS", valor?:string){
    if(valor){
        //console.log(`${origen} manda saludos a ${llegada} con el valor de ${valor}`)
    }else{
        // console.log(`${origen} manda saludos a ${llegada}.`)
    }
}
mandarSaludo("Pedro");// Pedro manda saludos a Escuela CS

mandarSaludo("Pedro","Director de CS");//Pedro manda saludos a Director de CS.

mandarSaludo("Pedro","Director de CS","Responsabilidad");//Pedro manda saludos a Director de CS con el valor de Responsabilidad


// FUNCIONES FLECHA
let miFuncion1 = function (nombre:string){
    return nombre;
}
let miFuncion1F =  (a:string) => a;

// console.log(miFuncion1("Normal"));
// console.log(miFuncion1F("Flechas"));


let miFuncion2 = function(a:number, b:number){
    return a+b;
}

let miFuncion2F = (a:number,b:number) => a+b;

// console.log(miFuncion2(2,4));
// console.log(miFuncion2F(20,40));

let miFuncion3 = function(a:string){
    a = a.toUpperCase();
    return a;
}

let miFuncion3F = (a:String) => {
    a = a.toUpperCase();
    return a;
}
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

let princesa = {
    nombre : "Princess Isabel ",
    talk(){
        setTimeout(()=>{
            console.log(this.nombre + "say Lets go"); // esto imprimira Princesa Isabel say Lets go.
        },1500);
    }
}
princesa.talk();// esto imprimira Princesa Isabel say Lets go.


//end
