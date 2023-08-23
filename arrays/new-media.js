const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
var soma = 0;
let elementos = 0;

for (let i = 0 ; i < notasGerais.length ; i++){
    for(let nota of notasGerais[i]){
        soma += nota;
    }
    elementos += notasGerais[i].length;
}

console.log(`soma:  ${soma}`)
console.log(`numero de elementos: ${elementos}`)
console.log(`O resultado da média é ${soma / elementos}`)

// console.log(`pre teste`)

// const notas1 = [10, 6.5, 8 ,7.5]
// const notas2 = [9, 6, 6]
// const notas3 = [8.5, 9.5]
 
// const notasGerais = [notas1,notas2,notas3]
 
// let media = 0
 
// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }
 
// media = media/notasGerais.length
 
// console.log(media)
