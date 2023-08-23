const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunoNota = [alunos, medias];

function verificaNome (aluno) {
    // if (alunoNota[0].includes(aluno)) {
    //     console.log(`O aluno ${aluno} está no sistema e sua nota é ${alunoNota[1][alunoNota[0].indexOf(aluno)]}`)
    // } else {
    //     console.log(`${aluno} não está no sistema.`)
    // }
    console.log(alunoNota[0].includes(aluno) ? `O aluno ${aluno} está no sistema e sua nota é ${alunoNota[1][alunoNota[0].indexOf(aluno)]}` : `${aluno} não está no sistema.`)
}

verificaNome("João");
verificaNome("Maria");
verificaNome("Ana");
verificaNome("Caio");
verificaNome("William");