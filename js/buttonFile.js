document.addEventListener("DOMContentLoaded", ready);

function ready() {

    const input = document.getElementById('file');
    const fakeButton = document.getElementById('fake-button');

    input.addEventListener('change', function (e) {
        if (e.srcElement.value != "") {
            fakeButton.innerHTML = e.srcElement.value.slice(12);
        }
    })

}