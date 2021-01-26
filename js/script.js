let inputRange = document.getElementById('range');
let textOnRange = document.getElementById('interest');
let inputEmail = document.getElementById('email');
let inputName = document.getElementById('name');
let inputError = document.getElementById('input-error');
let buttonSend = document.getElementById('button-send');
const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameReg = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

textOnRange.innerHTML = inputRange.value;

inputRange.oninput = function () {
    textOnRange.innerHTML = this.value;
}



function checkInputs() {

    if (inputEmail.value.match(mailReg) && inputName.value.length <=15 && inputName.value.length >= 5 &&
        (inputError.innerHTML === "Введёт неверный адрес электронной почты" ||
            inputError.innerHTML === "Имя должно состовлять от 5 до 15 символов" ||
            inputError.innerHTML === "Введены неверное имя и адрес электронной почты" ||
            inputError.innerHTML === "")) {
        inputError.innerHTML = "Спасибо за регистрацию";
    } else if (!inputEmail.value.match(mailReg) && (inputName.value.length <=15 && inputName.value.length >= 5)) {
        inputError.innerHTML = "Введёт неверный адрес электронной почты";
    } else if (inputEmail.value.match(mailReg) && !(inputName.value.length <=15 && inputName.value.length >= 5)) {
        inputError.innerHTML = "Имя должно состовлять от 5 до 15 символов";
    } else if (!inputEmail.value.match(mailReg) && !(inputName.value.length <=15 && inputName.value.length >= 5)) {
        inputError.innerHTML = "Введены неверное имя и адрес электронной почты";
    } else if (inputError.innerHTML == "Спасибо за регистрацию") {

        inputEmail.value = "";
        inputName.value = "";
    }

    inputError.style.color = "red";
    inputError.style.fontFamily = "'FS Emeric Extra', sans-serif";
    inputError.style.fontSize = "0.8em";
}


buttonSend.addEventListener('click', checkInputs);

