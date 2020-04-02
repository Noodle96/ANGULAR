"use strict";
//CLASES EN TYPESCRIPT
var Carta = /** @class */ (function () {
    function Carta(name, tipo, puntosVida) {
        this.createInitial = false;
        this.name = name;
        this.tipo = tipo;
        this.puntosVida = puntosVida;
    }
    return Carta;
}());
var princess = new Carta("princesa", "Legendaria", 3400);
console.log(princess);
