class Doninha {
    // Properties
    nome: string;
    cor: string;
    idade: number;

    // Constructor
    constructor(nome: string, cor: string = "Castanho", idade: number = 1) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

    // Two actions
    cacar(): void {
        console.log(`A doninha ${this.nome} está caçando pequenos roedores!`);        
    }

    esconder(): void {
        console.log(`A doninha ${this.nome} se escondeu rapidamente na toca.`);        
    }
}

// Two objects instance
const doninha1 = new Doninha("Fura", "Branco", 2);
const doninha2 = new Doninha("Ligeira");

// Print
console.log(`Primeiro animal criado: ${doninha1.nome}`);
console.log(`Segundo animal criado: ${doninha2.nome}`);

// Test
doninha1.cacar();
doninha2.esconder()
