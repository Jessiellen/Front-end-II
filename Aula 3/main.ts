// Exercicio 1 //
// 
// class Veiculo {
//     marca: string;
//     modelo: string;
//     ano: number;

//     constructor(marca: string, modelo: string, ano: number) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }

//     description(): string {
//         return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
//     }
// }

// class Carro extends Veiculo {
//     portas: number;

//     constructor(marca: string, modelo: string, ano: number, portas: number) {
//         super(marca, modelo, ano);  
//         this.portas = portas;
//     }

//     getPortas(): number {
//         return this.portas;      
//     }

//     description(): string {
//         return `${super.description()} com ${this.portas} portas.`;
//     }
// }

// const Meucarro = new Carro('Toyota', 'Corolla', 2020, 4);

// console.log(Meucarro.marca);  
// console.log(Meucarro.ano);    
// console.log(Meucarro.modelo); 
// console.log(Meucarro.getPortas()); 
// console.log(Meucarro.description());

// A "getPortas" é para permitir ver a quantidade de portas, codigo ficar mais organizado;

// Exercicio 2 //

// interface Player {
//     name: string;
//     age: number;
//     game: string;
//   }
  
//   const playerPartial: Partial<Player> = {
//     name: 'Lucas',
//     game: 'FIFA',
//   };
  
//   console.log(playerPartial);  
  
//   const playerReadonly: Readonly<Player> = {
//     name: 'Mariana',
//     age: 25,
//     game: 'Overwatch',
//   };
  
//   console.log(playerReadonly);

  
//   type PlayerPreview = Pick<Player, 'name' | 'game'>;
  
//   const playerPick: PlayerPreview = {
//     name: 'Carlos',
//     game: 'Valorant',
//   };
  
//   console.log(playerPick);
  
  
//   type PlayerInfo = Omit<Player, 'age'>;
  
//   const playerOmit: PlayerInfo = {
//     name: 'Alice',
//     game: 'League of Legends',
//   };
  
//   console.log(playerOmit);  
  
//   const player: Player = {
//     name: 'Pedro',
//     age: 30,
//     game: 'Minecraft',
//   };
  
//   console.log(player);
  
// Exercicio 3 //
class ListHandler<T> {
    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.items
    }
}

const listHandler = new ListHandler();

listHandler.add("Jessie");
listHandler.add("Satoro");
listHandler.add("Kaneki");
listHandler.add("Salém");
listHandler.remove("Salém");


console.log(listHandler.getAll());
