// Render View
const form = document.querySelector(".form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");
const barMenu = document.querySelector(".bars-menu i");
const modal = document.querySelector(".hovering-menu")
const cardWrapper = document.querySelector(".wrap-card");

window.onload(() => {
    fetchApi();
})

const fetchApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`).
    then(response => response.json()).
    then(data => {
        data.forEach(val => {
            const postWrap = document.createElement('div');
            const postTitle = document.createElement('h2');

            postTitle.innerHTML = `<a href="detail.html?id=${val.id}&type=posts">ID: ${val.id}| ${val.title} </a>`;

            postWrap.appendChild(postTitle);

            wrapper.appendChild(postWrap);
        });
    });
}

// function
const createCard = (name,email) => {
    const div = document.createElement('div');
    const icon = document.createElement('i');
    const heading = document.createElement('h3')
    const text = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add('card-item');
    icon.classList.add('fas');
    icon.classList.add('fa-user');
    button.classList.add('button');
    heading.textContent = name;
    text.textContent = email;
    button.textContent = "Learn More";
    
    div.appendChild(icon);
    div.appendChild(heading);
    div.appendChild(text);
    div.appendChild(button);

    return div;
}

// Events
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log("1234 test")
    if (form.checkValidity()) {
        const formData = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value
        }
        console.log(formData);

        fetch('http://localhost:3000/messages',{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert("Thank you for contacting us!");d
            window.location.reload();
        })
        .catch(error => console.log(error));
    }
})

barMenu.addEventListener('click', event => {
    modal.style.display = modal.style.display === "flex"? "none":"flex";
})