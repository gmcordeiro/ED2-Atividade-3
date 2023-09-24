const sys_user = "admin";
const sys_password = "1234";

function login(){
	let user = document.getElementById('inputUser').value;
	let password = document.getElementById('inputPassword').value;

	console.log(user);
	console.log(password);

	if (user === sys_user && password === sys_password) {
		window.location = 'cad-contato.html';
	} else {
		alert('Usuário ou senha errados!');
	}
}