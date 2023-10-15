const navMain = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');

function menuScript() {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }
  });
}

export {menuScript};
