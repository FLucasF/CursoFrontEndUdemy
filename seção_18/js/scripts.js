//Arrays
const lista = [1,2,3,4,5];
console.log(lista);
console.log(typeof lista);
const itens = ["Lucas", true, 2, 4.2]
console.log(itens);

//Mais sobre arrays
const arr = ["a","b","c"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

//Propriedades
const numbers = [5,6,7,8]
console.log(numbers.length);
console.log(numbers["length"]);
const myName = "Lucas";
console.log(myName.length);

//Métodos
const otherNumbers = [1,2,3];
const allNumber = numbers.concat(otherNumbers);
console.log(allNumber);
const text = "texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase());
console.log(text.indexOf("t"));

//Objetos
const person = {
    name: "Lucas",
    age: 12,
    job: "programador"
};

console.log(person.name);
console.log(person.age);
console.log(person.job);
console.log(person.name.length);
console.log(typeof person);

//Criado e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
};

console.log(car);
delete car.km;
console.log(car);

//Mais sobre objetos
const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);
console.log(obj2);

//Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));
console.log(Object.entries(obj));

//Mutação
const a = {
    name: "lucas"
};

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;

console.log(b);
delete b.age;
console.log(a);
console.log(b);

//Loop em array
const users = ["Lucas", "Felipe"]
for (let i=0; i < users.length; i++) console.log(users[i]);

//Push pop
const array = ["a", "b", "c"];
array.push("d");
console.log(array, array.length);
let itenRemov = array.pop("a");
console.log(array, array.length);
console.log(itenRemov);
array.push("e","f","g");
console.log(array);

//shift unshift

const letters = ["a","b","c"];
const letter = letters.shift;

console.log(letter);
console.log(letters);

letters.unshift("z","x","y");
letters.unshift("p");

console.log(letters);

//indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));
console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);
console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Ovo"));
console.log(myElements.lastIndexOf("Ovo"));

//Slice
const testeSlice = ["a","b","c","d","e","f"];

const subArr = testeSlice.slice(2,4);
console.log(subArr);
const subArr2 = testeSlice.slice(2,4+1);
console.log(subArr2);
const subArr3 = testeSlice.slice(10);
console.log(subArr3);

//2 em diante
const subArr4 = testeSlice.slice(2);
console.log(subArr4);

//For each
const nums = [1,2,3,4,5];

nums.forEach((n) => {
    console.log(`num: ${n}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "js"},
    {title: "Terceiro post", category: "py"}
];

posts.forEach((post) => {
    console.log(`exibindo: ${post.title} e ${post.category}`);
});

//Includes
const brands = ["BWM", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("Kia"));

if (brands.includes("BMW")) console.log("Há carros da marca BMW!");

//Reverse
const reverseTest = [1,2,3,4,5];
reverseTest.reverse();
console.log(reverseTest);

//Trim
const trimTest = " testando \n  ";
console.log(trimTest.trim());
console.log(trimTest);
console.log(trimTest.trim().length);
console.log(trimTest.length);

//padsStart
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");
console.log(testePadStart);
console.log(newNumber);
const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

//Split
const frase = "O rato roeu a roupa do rei de roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

//Join
const itensPComp = ["Mouse", "Teclado", "Monitor"];
const fraseDComp = `Precisamos comprar: ${itensPComp.join(", ")}.`;
console.log(fraseDComp);

//Repeate
const palavra = "Testando";
console.log(palavra.repeat(5));

//Rest operador
const somaInfinita = (...args) => {
    let total = 0;
    for (let i=0; i < args.length; i++) total += args[i];
    return total;
};
console.log(somaInfinita(2,3));
console.log(somaInfinita(2,3,4,5,6,6,7));

//destructuring objetos
const userDetails = {
    firstName: "Lucas",
    lastName: "Felipe",
    job: "Programador"

};
const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

//Renomeando variáveis
const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);

//Destructuring arrays
const myList = ["Avião", "Onibus", "Barco"];
const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);

//Json
const myJson = 
    '{"name":"Lucas", "age":31, "Skills":["Java", "Python"]}';

//Json para objeto e objeto para json
const myObject = JSON.parse(myJson);

//Json invalido
//const badJson =
//    '{"name: Lucas, "age":31, "Skills":["Java", "Python"]}';

//const myBadObject = JSON.parse(badJason);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);