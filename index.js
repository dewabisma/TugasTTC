// Render View
const form = document.querySelector(".form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");
const barMenu = document.querySelector(".bars-menu i");
const modal = document.querySelector(".hovering-menu")
const cardWrapper = document.querySelector(".wrap-card");

window.onload = () => {
    fetchApi();
}

// function
const fetchApi = () => {
    
    fetch(`http://localhost:3000/messages?_page=1&_limit=3`).
    then(response => response.json()).
    then(data => {
        data.forEach(val => {
            cardWrapper.appendChild(createCard(val.name, val.email, val.id));
        });
    });
}

const createCard = (name, email, id = '') => {
    const div = document.createElement('div');
    const icon = document.createElement('i');
    const heading = document.createElement('h3')
    const text = document.createElement('p');
    const button = document.createElement('button');
    const link = document.createElement('a');

    div.classList.add('card-item');
    icon.classList.add('fas');
    icon.classList.add('fa-user');
    button.classList.add('button');
    link.setAttribute('href', `detail.html?id=${id}`);
    heading.textContent = name;
    text.textContent = email;
    button.textContent = "Learn More";
    
    link.appendChild(button)
    div.appendChild(icon);
    div.appendChild(heading);
    div.appendChild(text);
    div.appendChild(link);
    

    return div;
}

// Events
form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.checkValidity()) {
        const formData = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value
        }

        fetch('http://localhost:3000/messages',{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert("Thank you for contacting us!");
            window.location.reload();
        })
        .catch(error => console.log(error));
    }
})

barMenu.addEventListener('click', event => {
    modal.style.display = modal.style.display === "flex"? "none":"flex";
})