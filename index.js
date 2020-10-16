// Render View
const form = document.querySelector(".form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");

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