// algoritmo que calcule uma sequencia de notas

const notas = [10, 9, 10, 8, 7.5, 6, 5.5, 8];
// const notas = [10, 10, 10,];

let media = 0;

for (let i = 0; i < notas.length; i++){
    media += notas[i]
};
media = media / notas.length;
console.log(`A média é ${media}!`);

notas.push(7);

notas[9] = 10;
console.log(notas);

// removendo elementos
notas.pop(); // remove o ultimo
notas.shift(); // remove o primeiro

// unshift ele adiciona elementos no inicio do array
console.log(`Antes do unshift:  ${notas}`)

notas.unshift(8, 5);

console.log(`Depois do unshift:  ${notas}`)