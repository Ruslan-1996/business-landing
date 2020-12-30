document.addEventListener("DOMContentLoaded", inputSelect);

function inputSelect() {

    const select = document.querySelector('.inputs__select');
    const body = document.querySelector('body');
    const selectCurrent = document.querySelector('.inputs__select-current');
    const selectHeader = document.querySelector('.inputs__select-header');
    const selectBody = document.querySelector('.inputs__select-body')

    body.onclick = function (e) {
        select.classList.add('is-active');
    }

    selectHeader.onclick = function (e) {
        e.stopPropagation();
        select.classList.toggle('is-active')
    }

    selectBody.onclick = function (e) {
        select.classList.toggle('is-active');
        selectCurrent.innerHTML = e.target.innerHTML;
    }

}