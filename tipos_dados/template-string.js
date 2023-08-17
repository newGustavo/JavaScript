const nome = "Gustavo";
const idade = "23";
const cidade = "Rio Branco - AC";

var apresentação = "Meu nome é " + nome + ", tenho "+ idade + " anos de idade e sou natural de " + cidade +".";
console.log(apresentação)

// usando o template string se usa o sinal de crase `
var apresentação = `Meu nome é ${nome}, tenho ${idade} anos de idade e sou natural de ${cidade}.`;
console.log(apresentação)
