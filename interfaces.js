"use strict";
//INTERFACES EN JS
//  carta :{name,,tipo,vida}
function saludoDe(carta) {
    console.log(carta.name + " Te esta saludando");
    console.log(carta);
}
var cartaPrincesa2 = {
    name: "Princesa",
    tipo: "Legendaria",
    vida: 1350,
};
saludoDe(cartaPrincesa2);
