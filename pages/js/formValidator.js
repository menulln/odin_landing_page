const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');

inputUsername.addEventListener('onchange', validateUsername);
inputEmail.addEventListener('onchange', validateEmail);
inputPassword.addEventListener('onchange', validatePassword);