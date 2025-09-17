function addEventListeners() {
  document
    .querySelector('.product-card__buy-btn')
    .addEventListener('click', openDialog);
}
const KEYCODE = {
  ESC: 27,
};

const dialog = document.querySelector('.dialog');
const dialogMask = dialog.querySelector('.dialog__mask');
const dialogWindow = dialog.querySelector('.dialog__window');
let previousActiveElement;
function openDialog() {
  previousActiveElement = document.activeElement;

  Array.from(document.body.children).forEach((child) => {
    if (child !== dialog) {
      child.inert = true;
    }
  });
  dialog.classList.add('opened');
  dialogMask.addEventListener('click', closeDialog);
  dialogWindow.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', closeDialog);
  });
  document.addEventListener('keydown', checkCloseDialog);
  dialog.querySelector('button').focus();
}
function checkCloseDialog(e) {
  if (e.keyCode === KEYCODE.ESC) {
    closeDialog();
  }
}

function closeDialog() {
  dialogMask.removeEventListener('click', closeDialog);
  dialogWindow.querySelectorAll('button').forEach((btn) => {
    btn.removeEventListener('click', closeDialog);
  });
  document.removeEventListener('keydown', checkCloseDialog);
  Array.from(document.body.children).forEach((child) => {
    if (child !== dialog) {
      child.inert = false;
    }
  });
  previousActiveElement.focus();
}
