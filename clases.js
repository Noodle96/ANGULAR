"use strict";
//CLASES EN TYPESCRIPT
var Carta = /** @class */ (function () {
    function Carta(name, tipo, puntosVida) {
        if (puntosVida === void 0) { puntosVida = 0; }
        this.puntosVida = 800;
        this.createInitial = false;
        this.name = name;
        this.tipo = tipo;
        this.puntosVida = puntosVida;
    }
    return Carta;
}());
var princess = new Carta("princesa", "Legendaria");
console.log(princess);
