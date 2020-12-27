let inputEmail = document.getElementById('email');
let inputName = document.getElementById('name');
let inputErrorEmail = document.getElementById('input-error-email');
let inputErrorName = document.getElementById('input-error-name');
const buttonSend = document.getElementById('button-send');
const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameReg = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;


function checkInputs() {

    if (inputEmail.value.match(mailReg)) {
        inputErrorEmail.innerHTML = "Почта введена верно";
        inputErrorEmail.style.color = '#B8B8BD';
    } else {
        inputErrorEmail.innerHTML = "Почта введена неверно"
        inputErrorEmail.style.color = 'red';
    }

    if ((inputName.value.length <=15 && inputName.value.length >= 5) && inputName.value.match(nameReg)) {
        inputErrorName.innerHTML = "Имя указанно верно";
        inputErrorName.style.color = '#B8B8BD';
    } else if (!(inputName.value.length <=15 && inputName.value.length >= 5) && inputName.value.match(nameReg)) {
        inputErrorName.innerHTML = "Имя должно состовлять от 5 до 15 символов";
        inputErrorName.style.color = 'red';
    } else if ((inputName.value.length <=15 && inputName.value.length >= 5) && !inputName.value.match(nameReg)) {
        inputErrorName.innerHTML = "Имя должно содержать только кирилицу, латиницу и цифры, без знаков припенания и пробелов";
        inputErrorName.style.color = 'red';
    } else if (inputName.value === '') {
        inputErrorName.innerHTML = "Введите имя";
        inputErrorName.style.color = 'red';
    }
}


buttonSend.addEventListener('click', checkInputs);