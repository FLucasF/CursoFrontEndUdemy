//strict
"use strict";

//opa = "não da certo";

const opa = "agora sim";

//Console log
let a = 1;
let b = 2;
if(a===1) a = b + 2;
console.log(a, b);

for (let i = 0; i < b; i++) {
    a += 2;
    console.log(a);    
};

if(a > 5) a = 25;
console.log(a);

//Debugger
let c = 1;
let d = 2;

if(c===1) {
    c = d + 2;
};

//debugger;
for (let i = 0; i < d; i++) c += 2;
//debugger;
if(c > 5) c = 25;
//debugger;

//Tratamento de dados
function checkNumber(n) {
    const result = Number(n);
    
    if(Number.isNaN(result)) {
        console.log("valor incorreto")
        return null;
    }else{
        console.log("valor correto");
        return result;
    };
};

checkNumber(5);
checkNumber("5");
checkNumber({});

//Exception
let x = 10;

if (x != 11) throw new Error("O valor de x não pode ser diferente de 11");

//Try catch
try {
    const value = checkNumber("asd");
} catch(error) {
    console.log(`Aconteceu um erro ${error}`);
} finally {
    console.log("O código foi executado!");
};

//Assertions
function checkArray(arr) {
    if(arr.length === 0) throw new Error("O array precisa ser elementos!");
    else console.log(`O array tem ${arr.length} elementos`);
};

checkArray([]);