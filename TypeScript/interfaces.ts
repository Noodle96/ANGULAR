//INTERFACES EN JS

interface CartaM{
    name:string,
    tipo:string,
    vida:number
}

            //  carta :{name,,tipo,vida}
function saludoDe(carta:CartaM){
    console.log(carta.name + " Te esta saludando");
    console.log(carta);


}

let cartaPrincesa2:CartaM = {
    name:"Princesa",
    tipo: "Legendaria",
    vida: 1350,
}

saludoDe(cartaPrincesa2);
