function ready() {
    var inputs = document.getElementById('file');
    Array.prototype.forEach.call(inputs, function (input) {

        var label = input.nextElementSibling;
        var labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            console.log(this.files);
            var fileName = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('(count)', this.files.lenght)
            } else {
                fileName = this.files[0].name;
            }

            if (fileName) {
                label.querySelector('span').innerHTML = fileName
            } else {
                label.innerHTML = labelVal;
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", ready);