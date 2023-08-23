const notas = [10, 9, 10, 8, 7.5, 6, 5.5, 8];
const newNotas = [8, 9, 10, 10, 7, 5.5];

// separando listas
const todasNotas = [notas, newNotas];
function separaArrays () {
    // const notas = todasNotas[0]
    // const newNotas = todasNotas[1]
    console.log(`notas ${notas}`)
    const [notas, newNotas] = todasNotas;
    console.log(`newNotas ${newNotas}`)
}

separaArrays()

// Adicionando elementos
notas.push(7);
notas[9] = 10;
notas.unshift(8, 5);

console.log(notas);

// removendo elementos
notas.pop(); // remove o ultimo
notas.shift(); // remove o primeiro

console.log(`Depois de remover um elemento do inicio e do fim:  ${notas}`)