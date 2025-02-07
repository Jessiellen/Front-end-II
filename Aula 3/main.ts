class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    portas: number;

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano);  
        this.portas = portas;
    }

    getPortas(): number {
        return this.portas;      
    }
}

const Meucarro = new Carro('Toyota', 'Corolla', 2020, 4);

console.log(Meucarro.marca);  
console.log(Meucarro.ano);    
console.log(Meucarro.modelo); 
console.log(Meucarro.getPortas()); 


// A "getPortas" é para permitir ver a quantidade de portas, codigo ficar mais organizado;