const navigation = document.querySelector('.main-header__navigation');
const burgerMenu = document.querySelector('.navigation__burger-menu');

const burgerMenuClickHandler = () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }

  window.addEventListener('click', windowClickHandler);
  window.addEventListener('keydown', gurgerMenuKeydownHandler);
};

const gurgerMenuKeydownHandler = (event) => {
  if (event.keyCode === 27) {
    if (navigation.classList.contains('navigation--opened')) {
      navigation.classList.remove('navigation--opened');
      navigation.classList.add('navigation--closed');
    }

    window.removeEventListener('click', windowClickHandler);
    window.removeEventListener('keydown', gurgerMenuKeydownHandler);
  }
};

const windowClickHandler = (event) => {
  if (!event.target.closest('.navigation__list') &&
      !event.target.closest('.navigation__burger-menu')) {
    if (navigation.classList.contains('navigation--opened')) {
      navigation.classList.remove('navigation--opened');
      navigation.classList.add('navigation--closed');
    }

    window.removeEventListener('click', windowClickHandler);
    window.removeEventListener('keydown', gurgerMenuKeydownHandler);
  }
};

burgerMenu.addEventListener('click', burgerMenuClickHandler);
