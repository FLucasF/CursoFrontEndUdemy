//Variáveis
let nome = "Lucas";

console.log(nome);

nome = "Lucas Felipe"

console.log(nome);

const age = 31;

console.log(age);

//age = 32;
console.log(typeof nome);
console.log(typeof age);

//Mais sobre variaveis

//let 2teste = "inválido";
//let @teste = "inválido";

let a = 10, b = 20, c = 30;
const nomeCompleto = "Lucas Felipe"
const nomecompleto = "Felipe Lucas"
console.log(nomeCompleto, nomecompleto)

let _teste = "válido"
let $test = "válido"

console.log(_teste, $teste);

//Prompt
const idade = prompt ("Digite sua idade: ");
console.log(`Você tem ${idade} anos!`);

//Alert
alert("testando");
const z = 10;
alert(`O número é ${z}`);

//Math
console.log(Math.max(5,2,1,10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

//Console
console.log("teste");
console.error("erro!")
console.warn("aviso!")

//If
const m = 10;
if (m>5) {
    console.log("M é maior que 5");
}

const user = "João"
if (user === "João") {
    console.log("olá joão");
}

if (user === "Maria") {
    console.log("Olá maria");
}

//Else 
const usuario = "João"
if (usuario === "Maria") {
    console.log("olá Maria");
} else {
    console.log("Olá jõao")
}

//Else if
const usuario2 = "João"
if (usuario2 === "Maria") {
    console.log("olá Maria");
} else if (usuario2 === "Lenon"){
    console.log("Ola lenon")
} else if (usuario2 === "João") {
    console.log("Olá jõao")
} else {
    console.log("Nome não existe")
}

//While 
let p = 0;
while (p < 5) {
    console.log(`repetindo ${p}`);
    p++;
}

//Do while
let o = 10;
do {
    console.log(`Valor de o: ${o}`);
    o++;
} while (o > 1);

//For
for (let r = 0; r < 10; r++) {   
    console.log("repetindo..");
}

//Break
for (let g = 20; g > 10; g--) {
    console.log(`O g é: ${g}`)
    if (g === 12) {
        console.log("Chegamos no 12!")
        break;
    }
}

//Continue
for (let g = 20; g > 10; g--) {
    console.log(`O g é: ${g}`)
    if (g % 2 === 0) {
        console.log("Número par!")
        continue;
    }
}

//Switch
const job = "Advogado";
switch (job) {
    case "Advogado":
        console.log("Você é um advogado!");        
        break;

    case "Programador":
        console.log("Você é um programador!");        
        break;

    default:
        console.log("Não encontrado")
        break;
}