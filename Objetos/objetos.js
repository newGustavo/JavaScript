// Criando o objeto
// nesse caso vai ser usado como exemplo uma pessoa
export const pessoa = {
    nome: 'Gustavo',
    idade: 23,
    emprego: 'Analista',
    teste: 'teste',
    telefone: ['68 99999-9999', '68 98888-8888'],
    enderecos: [{
        bairro: 'Quinze',
        numero: 'Honório Alves',
        rua: '12',
    }],
    saldo: 2000,
    efetuarTransacao: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!')
        } else {
            this.saldo -= valor;
            console.log(`Transação concluida! Seu novo saldo é de ${this.saldo}.`)
        }
    }
};

// deletando elementos
delete pessoa.teste;

console.log(
    `O nome da pessoa é ${pessoa.nome}, sua idade é ${pessoa.idade} e sua atuação é ${pessoa['emprego']}.`
);

const chaves = ['nome', 'idade', 'emprego'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${pessoa[chave]}`) // a gente usa esse ultimo operado quando temos o valor da chave em string
})

// Alterando atributos do objeto
// Antes das mudanças
console.log(pessoa);

// Operações
pessoa.enderecos.push({
    bairro: 'Quinze',
    numero: 'Honório Alves',
    rua: '180',
});
pessoa.email = 'gustavo@sdti.com';
pessoa.emprego += ' de Sistemas';
pessoa.efetuarTransacao(2500);
pessoa.efetuarTransacao(250);


// Depois das mudanças
console.log(pessoa);
