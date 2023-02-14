const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const onOpenModalClick = (evt) => {
  evt.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnCloseModalWindow.addEventListener('click', onCloseModalClick);
  overlay.addEventListener('click', onCloseModalClick);
  btnsOpenModalWindow.forEach((item) => {
    item.removeEventListener('click', onOpenModalClick);
  });
};

const onCloseModalClick = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
  btnCloseModalWindow.removeEventListener('click', onCloseModalClick);
  overlay.removeEventListener('click', onCloseModalClick);
  btnsOpenModalWindow.forEach((item) => {
    item.addEventListener('click', onOpenModalClick);
  });
};

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    onCloseModalClick();
  }
});

const createModal = () => {
  btnsOpenModalWindow.forEach((item) => {
    item.addEventListener('click', onOpenModalClick);
  });
};

export {createModal};
