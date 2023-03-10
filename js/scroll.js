const buttonScrollTo = document.querySelector('.btn--scroll-to');
const sectionScrollTo = document.querySelector('#section--1');
const navLinks = document.querySelector('.nav__links');

const initializeScrollTo = () => {
  buttonScrollTo.addEventListener('click', (evt) => {
    const sectionScrollToĞ¡oord = sectionScrollTo.getBoundingClientRect();
    window.scrollTo({
      left: sectionScrollToĞ¡oord.left,
      top: sectionScrollToĞ¡oord.top + window.scrollY,
      behavior: 'smooth',
    });
  });

  navLinks.addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = evt.target.getAttribute('href');
    if (target) {
      const sectionTo = document.querySelector(target);
      sectionTo.scrollIntoView({behavior: 'smooth'});
    }
  });
};

export {initializeScrollTo};
