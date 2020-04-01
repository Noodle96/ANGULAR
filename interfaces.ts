//INTERFACES EN JS

interface Carta{
    name:string,
    tipo:String,
    vida:number
}

            //  carta :{name,,tipo,vida}
function saludoDe(carta:Carta){
    console.log(carta.name + " Te esta saludando");
    console.log(carta);


}

let cartaPrincesa:Carta = {
    name:"Princesa",
    tipo: "Legendaria",
    vida: 1350,
}

saludoDe(cartaPrincesa);
