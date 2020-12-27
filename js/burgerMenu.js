function burgerMenu() {
    let buttonBurgerMenu = document.querySelector('.header__burger');
    let headerBurgerMenu = document.querySelector('.header__nav');
    let body = document.querySelector('body');
    let header = document.querySelector('.header')
    buttonBurgerMenu.addEventListener('click', function () {
        buttonBurgerMenu.classList.toggle('active');
        headerBurgerMenu.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('lock');

    })
}

document.addEventListener("DOMContentLoaded", burgerMenu)