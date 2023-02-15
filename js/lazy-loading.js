const lazyImages = document.querySelectorAll('img[data-src]');
const onImageLoad = (entry) => {
  entry.target.classList.remove('lazy-img');
  entry.target.removeEventListener('load', onImageLoad);
};
const obsOptions = {
  root: null,
  treshold: 0.1,
  rootMatgin: '100px',
};

const getLazyLoading = (entries, observer) => {
  const [entry] = [...entries];

  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', onImageLoad);
    observer.unobserve(entry.target);
  }
};

const initializeLazyLoading = () => {
  const lazyImagesObserver = new IntersectionObserver(
    getLazyLoading,
    obsOptions
  );
  lazyImages.forEach((lazyImage) => lazyImagesObserver.observe(lazyImage));
};

export {initializeLazyLoading};
