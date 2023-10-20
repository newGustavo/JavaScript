import {pessoa} from './objetos.js';
console.log(pessoa)


for (let chave in pessoa) {
    console.log(chave)
    // console.log(pessoa[chave])
    // console.log(typeof(pessoa[chave]))
};

// Existe outra forma de copturar as chaves do objeto, basta utilizar o comando Object.keys(nome_do_objeto)

const chavesDoObjeto = Object.keys(pessoa);

console.log(chavesDoObjeto);