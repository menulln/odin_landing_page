const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');

inputUsername.addEventListener('input', validateUsername);
inputEmail.addEventListener('input', validateEmail);
inputPassword.addEventListener('input', validatePassword);

function validateUsername(e) {
    const re = /[^a-z0-9]/i;
    
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Please only enter letters & numbers.';
    errorMsg.style.color = '#E22F2B';
    errorMsg.style.fontSize = '14px';

    if (this.value.match(re)) {
        const section = document.querySelector('.signup-username');
        if(section.childElementCount < 3) {
            section.appendChild(errorMsg);
        }
    }
}

function validateEmail(e) {

}

function validatePassword(e) {

}