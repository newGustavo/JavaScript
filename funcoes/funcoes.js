// Função normal
function digaOi (nome) {
    console.log(`Olá, ${nome}.`)
}

digaOi("Gustavo")

// Função dentro de outra

function somar (num1, num2) {
    return num1 + num2;
}

function multi (num1, num2){
    return num1 * num2;
}
console.log(multi(somar(20, 10), somar(0.25, 0.25)))


// É possivel chamar uma função antes de declarar ela no código

saudacao()
function saudacao () {
    console.log("Olá!")
}

// É possivel declarar uma var como função

const soma = function (num1, num2) {
    return num1 + num2;
}

console.log(soma(20, 10))

// ArrowFunction
    // em uma linha
const mostraArrow = nome => `Meu nome é ${nome}.`;

const maiorNumero = (var1, var2) =>{
    console.log(var1 > var2 ? `O número ${var1} é maior` : `O número ${var2} é maior` )
}

console.log(mostraArrow("Gustavo"))

maiorNumero(100, 200);

