const alunos = ["Ana", "Marcos", "Maria", "Mauro"];

const medias = [7, 4.5, 8, 7.5];

// percorre a lista de alunos e verifica se na lista de medias na mesma posição
// (onde está sua nota) é acima de 7 e filtra isso retornando apenas os aprovados

const aprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7;
})

console.log(aprovados);