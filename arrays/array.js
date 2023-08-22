const notas = [10, 9, 10, 8, 7.5, 6, 5.5, 8];

// Adicionando elementos
notas.push(7);
notas[9] = 10;
notas.unshift(8, 5);

console.log(notas);

// removendo elementos
notas.pop(); // remove o ultimo
notas.shift(); // remove o primeiro

console.log(`Depois de remover um elemento do inicio e do fim:  ${notas}`)