const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const getStickyNav = (entries) => {
  const [entry] = [...entries];

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-425px',
};

const initializeStickyNav = () => {
  const headerObserver = new IntersectionObserver(getStickyNav, obsOptions);
  headerObserver.observe(header);
};

export {initializeStickyNav};
