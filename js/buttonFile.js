function ready() {
    let input = document.getElementById('file');
    let fakeButton = document.getElementById('fake-button');

    input.addEventListener('change', function (e) {
        if (e.srcElement.value != "") {
            console.log(e.srcElement.value);
            fakeButton.innerHTML = e.srcElement.value.slice(12);
            console.log(fakeButton.innerHTML.slice(12));
        }
    })
}

document.addEventListener("DOMContentLoaded", ready);