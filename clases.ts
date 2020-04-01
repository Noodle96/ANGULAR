
//CLASES EN TYPESCRIPT

class Carta {
    name:string;
    tipo:string;
    puntosVida:number;
    createInitial:boolean = false;

    constructor(name:string,tipo:string,puntosVida:number){
        this.name=name;
        this.tipo = tipo;
        this.puntosVida=puntosVida;
    }
}

let princess:Carta = new Carta("princesa","Legendaria",3400);
console.log(princess);
