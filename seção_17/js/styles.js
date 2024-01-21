function minhaFuncao() {
    console.log("testando!");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Opa");

//Return
const a=10, b=20, c=30, d=40;

function soma(n1, n2) {
    return n1 + n2;
}

const result = soma(1+2);

console.log(result);
console.log(soma(1, 2));

//Escopo da função

let y=10;

function testandoEscopo() {
    let y=20;
    console.log(y);
}

console.log(`Fora da função ${y}`);

testandoEscopo();

//Escopo aninhado
let m=10;
function escopoAlinhado() {
    if (true) {
        let m=30;
        console.log(m);
    }
    console.log(m);
}

escopoAlinhado();
console.log(m);

//Arrow function
const testArrow = () => {
    console.log("Arrow function");
};

testArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }

    console.log("Impar");
};

parOuImpar(5);
parOuImpar(6);

//Mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
};

const raizQuadrada2 = (n) => n * n;

console.log(raizQuadrada(4));
console.log(raizQuadrada2(4));

const hello = () => console.log("Hello");

hello();

//Parametro opcional
const multiplication = function (n,m) {
    if (m === undefined) {
        return n * 2;
    } else {
        return m * n;
    }
};

console.log(multiplication(4,4));
console.log(multiplication(4));

const greeting = (name) => {
    if (!name) {
        console.log("Olá")
        return;
    }

    console.log(`Olá ${name}`);
}

greeting();
greeting("Lucas");

//Valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
};

console.log("Lucas");
console.log("Lucas", "Bom dia");

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Test");
repeatText("Test 5", 5);

//Clousure
const multiplcationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplcationClosure(5);
const c2 = multiplcationClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

//Recursion
const untilTen = (n, m) => {
    if(n<10) {
        console.log("A função parou de executar!")
    }
    const x = n - m;

    console.log(x);

    untilTen(x, m);
};

untilTen(100, 7);