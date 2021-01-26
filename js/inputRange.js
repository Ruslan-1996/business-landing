document.addEventListener('DOMContentLoaded', inputRange)

function inputRange () {

    const inputRange = document.getElementById('range');
    const textOnRange = document.getElementById('interest');
    const lineRange = document.querySelector('.content-range__line-range');

    textOnRange.innerHTML = inputRange.value + '%';

    inputRange.oninput = function () {
        textOnRange.innerHTML = this.value + '%';
        lineRange.style.width = this.value + '%';
    }

}




