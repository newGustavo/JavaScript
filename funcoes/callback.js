// funcao forEach

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(function (elemento, indice){
//     console.log(`O número é ${elemento} e o indice é ${indice}`)
// });

// tem como mandar uma função já feita

function imprimeNumero(numero){
    console.log(numero)
}

numeros.forEach(imprimeNumero);


// map
const newNumeros = numeros.map ((nota) => {
    return nota + 1;
});

console.log(newNumeros);


// desafio de passar uma lista de nomes para uppercase

nomes = ["Gustavo", "Ana", "José"]

const nomesUpper = nomes.map((nome) => {
    return nome.toUpperCase();
})

console.log(nomesUpper)