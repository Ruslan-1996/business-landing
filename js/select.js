function inputSelect () {
  let select = document.querySelector('.inputs__select');
  let body = document.querySelector('body');

  body.onclick = function (e) {
    select.classList.add('is-active');
  }

  select.onclick = function (e) {
    let selectCurrent = document.querySelector('.inputs__select-current');
    if (e.target.className === 'inputs__select-current' || e.target.className === 'inputs__select-icon' ||
        e.target.className === 'inputs__select-header' || e.target.className === 'inputs__select-body') {
      e.stopPropagation();
      this.classList.toggle('is-active');
    } else {
      e.stopPropagation();
      this.classList.toggle('is-active');
      selectCurrent.innerHTML = e.target.innerHTML;
    }
    console.log(e.target.classList);
  }

  document.querySelector('.arrow-down').onclick = function (e) {
    e.stopPropagation();
    select.classList.toggle('is-active');
  }
}

document.addEventListener("DOMContentLoaded", inputSelect);
