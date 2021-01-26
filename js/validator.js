document.addEventListener('DOMContentLoaded', clickCheckInputs);

function clickCheckInputs() {
    const buttonSend = document.getElementById('button-send');
    buttonSend.addEventListener('click', checkInputs);
}

function checkInputs() {

    const inputEmail = document.getElementById('email');
    const inputName = document.getElementById('name');
    const inputErrorEmail = document.getElementById('input-error-email');
    const inputErrorName = document.getElementById('input-error-name');
    const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameReg = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

    function validatorInputEmailReg() {
        return inputEmail.value.match(mailReg);
    }

    function validatorInputNameReg() {
        return inputName.value.match(nameReg);
    }

    function validatorLengthMoreInputName() {
        return inputName.value.length <= 15;
    }

    function validatorLengthLessInputName() {
        return inputName.value.length >= 5;
    }

    if (validatorInputEmailReg()) {
        inputErrorEmail.innerHTML = "Почта введена верно";
        inputErrorEmail.classList.remove('input-input-error--red');
    } else {
        inputErrorEmail.innerHTML = "Почта введена неверно"
        inputErrorEmail.classList.add('input-input-error--red');
    }

    if ((validatorLengthMoreInputName() && validatorLengthLessInputName()) && validatorInputNameReg()) {
        inputErrorName.innerHTML = "Имя указанно верно";
        inputErrorName.classList.remove('input-input-error--red');
    } else if (!(validatorLengthMoreInputName() && validatorLengthLessInputName()) && validatorInputNameReg()) {
        inputErrorName.innerHTML = "Имя должно состовлять от 5 до 15 символов";
        inputErrorName.classList.add('input-input-error--red');
    } else if ((validatorLengthMoreInputName() && validatorLengthLessInputName()) && !validatorInputNameReg()) {
        inputErrorName.innerHTML = "Имя должно содержать только кирилицу, латиницу и цифры, без знаков припенания и пробелов";
        inputErrorName.classList.add('input-input-error--red');
    } else if (inputName.value === '') {
        inputErrorName.innerHTML = "Введите имя";
        inputErrorName.classList.add('input-input-error--red');
    }

}