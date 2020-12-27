function ready() {
    let input = document.getElementById('file');
    let fakeButton = document.getElementById('fake-button');

    input.addEventListener('change', function (e) {
        console.log(e.srcElement.value);
        fakeButton.innerHTML = e.srcElement.value;
    })
}

document.addEventListener("DOMContentLoaded", ready);