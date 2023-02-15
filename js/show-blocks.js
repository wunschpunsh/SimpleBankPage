const allSections = document.querySelectorAll('.section');
allSections.forEach((section) => section.classList.add('section--hidden'));

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const renderBlocks = (entries, observer) => {
  const [entry] = [...entries];
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const initializeShowBlocks = () => {
  const sectionObserver = new IntersectionObserver(renderBlocks, obsOptions);
  allSections.forEach((section) => {
    sectionObserver.observe(section);
  });
};

export {initializeShowBlocks};
