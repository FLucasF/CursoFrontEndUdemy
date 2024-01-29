//Instalando axio
console.log(axios);

//Primeiro request
const getData = async() => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            //Definindo headers
            {
                headers: {
                    "content-type": "application/json",
                    custom: "header"
                },
            }
        )
        return response.data;
    } catch(error) {
        console.log(error.response);
    }
};

getData();

//Imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async() => {
    const data = await getData();

    console.log(data);

    data.forEach(user => {
        const div = document.querySelector("div");
        const nameElement = document.querySelector("h2");

        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);
        container.appendChild(div);
    });
};

printData();

//Post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

//form.addEventListener("submit", (e) => {
//    e.preventDefault();
//    axios.post("https://jsonplaceholder.typicode.com/posts", {
//        body: JSON.stringify({
//            title: titleInput.value,
//            body: bodyInput.value,
//            userId: 1,
//        }),
//    });
//});

//Com custom instance
form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1,
        }),
    });
});