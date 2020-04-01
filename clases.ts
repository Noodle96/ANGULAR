
//CLASES EN TYPESCRIPT

class Carta {
    name:string;
    tipo:string;
    puntosVida:number=800;
    createInitial:boolean = false;

    constructor(name:string,tipo:string,puntosVida:number=0){
        this.name=name;
        this.tipo = tipo;
        this.puntosVida=puntosVida;
    }
}

let princess:Carta = new Carta("princesa","Legendaria");
console.log(princess);
