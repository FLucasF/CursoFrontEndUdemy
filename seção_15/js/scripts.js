//Number
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -2);

//Op aritmetricas
console.log(2+4);
console.log(2-4);
console.log(2*4);
console.log(2/4);

//Special Numbers
console.log(typeof Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

//Strings
console.log("Um texto");
console.log('Mais um texto');
console.log(typeof "Opa");

//Símbolos especiais em string
console.log("Testando \nquebra linha");
console.log("Espaçamento \tde tab");

//Concatenação
console.log("Oi" + "tudo" + "bem?" );
console.log('Oi' + 'tudo' + 'bem?' );

//Interpolação
console.log(`A soma de 2 + 2 é: ${console.log(teste)}`); //USANDO O ´ PARA STRING CONSEGUE USAR DESTA FORMA

//Booleans
console.log(5 > 2);
console.log(typeof true);

//Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(5 == 5);
console.log(5 == 9);
console.log(5 != 9);

//Idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

//Op lógicos na prática
console.log(true && true);
console.log(false && true);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && 2 < "Matheus" === 1);
console.log(10 > 2 || 5 > 100);
console.log(!50 > 10);

//Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

//Mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);