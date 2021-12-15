const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

//form.addEventListener('submit', enviarEmail) 

function cambiarColorBorde(id) {
	if (document.getElementById(id).value != "") {
		document.getElementById(id).style.border = "1px solid green";
	} else {
		document.getElementById(id).style.border = "1px solid red";
	}
}

function cambiarColorFondo() {
	if ((document.getElementById("username").value != "") && (document.getElementById("email").value != "") && (document.getElementById("password").value != "") && (document.getElementById("password2").value != "")) {
		document.getElementById("botonok").style.backgroundColor = "green";
		document.getElementById("botonok").style.border = "1px solid green";
	} else {
		document.getElementById("botonok").style.backgroundColor = "red";
		document.getElementById("botonok").style.border = "1px solid red";
	}
}

// Eventos

function checkInputs() {
	// trim para sacar los espacios que quedn en blanco 
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Ingrese un usuario para continuar');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Ingrese un email para continuar');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Ingrese un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Ingrese una contraseña.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Ingrese una contraseña');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}
}
/*
function guardarDatosForm() {
	console.log("Guardo los datos del formulario en la localStorage 'datosFormulario'");
	var usuario = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var password2 = $("#password2").val();
	localStorage.setItem("datosFormulario", JSON.stringify({username:username, email:email, password:password, password2:password2}));
} */

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//guardarDatosForm();

/*function enviarEmail (e){
	e.preventDefault();
	
	document.write('Enviando...');

}*/