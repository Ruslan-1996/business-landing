select();

function select() {
  let  selectHeader = document.querySelectorAll('.inputs__select-header');
  let  selectItem = document.querySelectorAll('.inputs__select-item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectRemove)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectRemove() {
    this.parentElement.classList.remove('is-active');
  };

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.inputs__select');
    let currentText = select.querySelector('.inputs__select-current');
    currentText.innerText = text;
    select.classList.toggle('is-active');
  };
};