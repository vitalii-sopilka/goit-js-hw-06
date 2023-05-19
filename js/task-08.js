const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        return alert('Усі поля мають бути заповнені!');
    }

    console.log({Email: email.value, Password: password.value});
        event.currentTarget.reset();
}
