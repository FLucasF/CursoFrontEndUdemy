//Movendo-se no DOM
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1]);

//Selecionando por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

//Selecionando por id
const title = document.getElementById("title");
console.log(title);

//Selecionando por classe
const products = document.getElementsByClassName("product");
console.log(products);

//Selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery)
const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

//InsertBefore
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

//AppendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//ReplaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";
header.replaceChild(h2, title);

//CreateTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título");
const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

//Trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);
firstLink.setAttribute("href", "https://horadecordar.com.br");
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank");

//Altura e largura
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//Posição do elemento
const product1 = products[0];
console.log(product1.getBoundingClientRect());

//CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

//Alterando estilos de varios elementos
for(const li of listItens) li.style.backgroundColor = "red";