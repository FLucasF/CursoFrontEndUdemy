//Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Clicou aqui!");
});

//Removendo evento
const secontBtn = document.querySelector("#btn");
function imprimirMensagem() {
    console.log("teste");
};
secontBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secontBtn.removeEventListener("click", imprimirMensagem);
});

//Argumento de evento
const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.srcElement);
    console.log(e.offsetX);
    console.log(e.pointerType);
});

//Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});
btnInsideContainer.addEventListener("click", (e) => {
    //sem isso acontece a propagação
    e.stopPropagation();
    console.log("evento 2");
});

//Removendo efeito padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a págica")
});

//Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
});

//Outros eventos de mouse
const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mousedown", () => {
    console.log("Pressionou");
});
mouseEvent.addEventListener("mouseup", () => {
    console.log("soltou botão");
});
mouseEvent.addEventListener("dblclick", () => {
    console.log("clickduplo");
});

//Movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`no eixo X: ${e.x}`);
});

document.addEventListener("mousemove", (e) => {
    console.log(`no eixo Yx': ${e.y}`);
});

//Evento no scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) console.log("Passamos 200px");
});

//Evento focus
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("entrou no input!")
});
input.addEventListener("blur", (e) => {
    console.log("saiu no input!")
});

//evento carregamento
window.addEventListener("load", () => {
    console.log("página carregou!");
});
window.addEventListener("beforeunload", (evento) => {
    evento.preventDefault();
});

//Debounce
const debouce = (f, delay) => {
    let timeout;

    return(...args) => {
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            f.apply(args);
        }, delay);
    };
};

window.addEventListener("mousemove", debouce(() => {
    console.log("Executando a cada 400ms")
}, 400));