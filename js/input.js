let inputRange = document.getElementById('range');
let textOnRange = document.getElementById('interest');

textOnRange.innerHTML = inputRange.value;

inputRange.oninput = function () {
    textOnRange.innerHTML = this.value;
}





