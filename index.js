// Render View
const form = document.querySelector(".form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");
const formBtn = document.querySelector(".form button");

// Events
formBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (true) {
        const formData = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value
        }
        console.log(formData);
    }
    
})