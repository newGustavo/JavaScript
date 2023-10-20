const clientes = require('./clientes.json');

// printando os dados
// clientes.forEach((valor) => {
//     console.log(`O nome do usuário é ${valor.nome}, seu email é ${valor.email}, seus telefones são ${valor.telefone[0]} e ${valor.telefone[1]}.`)
// });

// find

function encontrarItens(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
};

function filtrarItens(lista, chave, valor){
    return lista.filter((item) => item[chave].includes(valor))
}

function filtrarPessoaApartemento(lista){
    return lista.filter((item) => item.endereco.apartamento === true)
}

function ordenaElementos(lista, propriedade){
    const variavel = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        } if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })
    return variavel;
}
// console.log(encontrarItens(clientes, "nome", "Kirby"))
// console.log(...filtrarItens(clientes, "telefone", "99916828153"))
// console.log(...filtrarPessoaApartemento(clientes))
console.log(ordenaElementos(clientes, "nome"));

