document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let input = document.getElementById('file');
    let fakeButton = document.getElementById('fake-button');

    input.addEventListener('change', function (e) {
        if (e.srcElement.value != "") {
            fakeButton.innerHTML = e.srcElement.value.slice(12);
        }
    })
}