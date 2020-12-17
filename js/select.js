select();

function select() {
  let  selectHeader = document.querySelectorAll('.select-header');
  let  selectItem = document.querySelectorAll('.select-item');

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
    let select = this.closest('.select');
    let currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.toggle('is-active');
  };
};