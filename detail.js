// declare variable
const param = new URLSearchParams(window.location.search);
const id = param.get('id');

// render view
const section = document.querySelector('.detail-content');
const barMenu = document.querySelector(".bars-menu i");
const modal = document.querySelector(".hovering-menu")

window.onload = () => {
    fetchApi();
}

// Functions
const fetchApi = () => {
    fetch(`http://localhost:3000/messages?id=${id}`).
    then(response => response.json()).
    then(data => {
        data.forEach(val => {
            section.appendChild(createCard(val.name, val.email, val.message));
        });
    });
}

const createCard = (name, email, message) => {
    const div = document.createElement('div');
    const icon = document.createElement('i');
    const heading = document.createElement('h3')
    const text = document.createElement('p');

    div.classList.add('card-item');
    icon.classList.add('fas');
    icon.classList.add('fa-user');
    heading.textContent = `Name: ${name} | Email: ${email}`;
    text.textContent = message;
    
    div.appendChild(icon);
    div.appendChild(heading);
    div.appendChild(text);

    return div;
}

// Event
barMenu.addEventListener('click', () => {
    modal.style.display = modal.style.display === "flex"? "none":"flex";
})