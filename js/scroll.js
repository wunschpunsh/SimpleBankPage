const buttonScrollTo = document.querySelector('.btn--scroll-to');
const sectionScrollTo = document.querySelector('#section--1');
const navLinks = document.querySelector('.nav__links');

const scrollTo = () => {
  buttonScrollTo.addEventListener('click', (evt) => {
    const sectionScrollToСoord = sectionScrollTo.getBoundingClientRect();
    window.scrollTo({
      left: sectionScrollToСoord.left,
      top: sectionScrollToСoord.top + window.scrollY,
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

export {scrollTo};
