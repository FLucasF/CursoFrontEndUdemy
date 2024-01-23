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
const cachorro = {
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
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    };

    descreveCaminhao() {
        console.log(
            `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`
        );
    };
};

const scania = new Caminhao(6, "Vermelha");
scania.descreveCaminhao();
Caminhao.motor = 4.0;
const c2 = new Caminhao(4, "Preta");

//Motor é undefined
console.log(c2.motor);
Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Azul");
console.log(c3.motor);

//override por prototype
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const lucas = new Humano("Lucas", 31);
console.log(lucas);

Humano.prototype.idade = "Não definida";

console.log(lucas.idade);
console.log(Humano.prototype.idade);

//Symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;
const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(Aviao.prototype[asas]);

//Getter Setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    };

    get exibirTitulo() {
        return this.titulo;
    };

    set adicionarTag(tags) {
        this.tags = tags;
    };

};

const myPost = new Post("Texto do post", "É um post sobre programação");
console.log(myPost.exibirTitulo);
myPost.adicionarTag = ("programação, js");
console.log(myPost)

//Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    };
};

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    };
};

const shark = new Lobo(4, "Shark");

console.log(shark);

//InstanceOF
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);

