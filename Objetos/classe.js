class Pessoa {
    constructor (nome, idade, email){
        this.nome;
        this.idade;
        this.email;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
}

const pessoa1= new Pessoa("Gustavo", 23, "gustavo@gmail.com");
console.log(pessoa1.getIdade);