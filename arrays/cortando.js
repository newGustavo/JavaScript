alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
novosAlunos = ["Leo", "Manoel", "Gustavo"];

// do inicio até a metade do array, funciona como se fosse um < (menor que)
sala1 = alunos.slice(0, alunos.length / 2);

// do meio até o final
sala2 = alunos.slice(alunos.length / 2);


// retirando elementos da lista com o comando splice()
// ele funciona parecido com o slice de forma que o primeiro parametro
// fala onde o corte deve começar e o segundo parametro é o número de
// elementos que devem ser removidos e o terceiro parametro é para
// adicionar algum elemento no lugar


// nesse caso vamo remover a ana e o caio para adicionar o Rodrigo
console.log(`Antes do splice(): ${alunos}`);
alunos.splice(2, 2, "Rodrigo");
console.log(`Depois do splice(): ${alunos}`);

// vamos concatenar as duas listas

novaLista = alunos.concat(novosAlunos);

console.log(novaLista)