document.addEventListener("DOMContentLoaded", burgerMenu);

function burgerMenu() {

    const buttonBurgerMenu = document.querySelector('.header__burger');
    const headerBurgerMenu = document.querySelector('.header__nav');
    const body = document.querySelector('body');
    const header = document.querySelector('.header')

    buttonBurgerMenu.addEventListener('click', function () {
        buttonBurgerMenu.classList.toggle('active');
        headerBurgerMenu.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('lock');
    })

}