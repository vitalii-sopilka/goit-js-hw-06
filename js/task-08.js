const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	// if (email.value === "" || password.value === "") {
	// 		return alert('Усі поля мають бути заповнені!');
	// }

	if (email.value.trim() === "" || password.value.trim() === "") {
		return alert('Усі поля мають бути заповнені!');
	}

	// console.log({Email: email.value, Password: password.value});
	console.log({ Email: email.value.trim(), Password: password.value.trim() });
	event.currentTarget.reset();
}
