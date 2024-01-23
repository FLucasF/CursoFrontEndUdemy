//Métodos
const animal = {
    nome: "bob",
    latir: function () {
        console.log("au au");
    }
};

animal.latir();

//Aprofundamento métodos
const pessoa = {
    nome: "lucas",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome);
pessoa.setNome("Lucas");
console.log(pessoa.getNome());

//Prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));
const bool = true;
console.log(Object.getPrototypeOf(bool));
const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

//Mais sobre prototype
const myObj = {
    a: "b"
};

console.log(Object.getPrototypeOf(myObj));
console.log(Object.getPrototypeOf(myObj) === Object.prototype);
const mySecondObject = Object.create(myObj);
console.log(mySecondObject);
console.log(Object.getPrototypeOf(mySecondObject) === myObj);

//Classes básicas
const dog = {
    raca:null
};

const pastorAlm = Object.create(cachorro);
pastorAlm.raca = "Pastor Alemão";
const bulldog = Object.create(cachorro);
pastorAlm.raca = "Bulldog";

//Funções como classe
function criarDog(nome, raca) {
    const cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.nome = nome;
    return cachorro;
}

const bob = criarDog("Bob", "Vira lata");
console.log(bob);
const jack = criarDog("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

//Funcoes construtoras
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

//Métodos na função construtura
Cachorro.prototype.uivar = function() {
    console.log("Auu");
};

husky.uivar();

//Classes es6
class CachorroClass {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
};

const jeff = new CachorroClass("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

//Mais sobre classes


