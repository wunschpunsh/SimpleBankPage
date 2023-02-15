const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let sliderNumber = slides.length;

const createDots = () => {
  slides.forEach((_, index) => {
    const dot = `<button class="dots__dot" data-slide="${index}"></button>`;
    dotsContainer.insertAdjacentHTML('beforeend', dot);
  });
};

createDots();

const addActiveClass = (slide) => {
  document.querySelectorAll('.dots__dot').forEach((dot) => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

addActiveClass(0);

const moveToSlide = (slide) => {
  slides.forEach((item, index) => {
    item.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

moveToSlide(0);

const onSlideRightHandler = () => {
  if (currentSlide === sliderNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveToSlide(currentSlide);
  addActiveClass(currentSlide);
};

const onSlideLeftHandler = () => {
  if (currentSlide === 0) {
    currentSlide = sliderNumber - 1;
  } else {
    currentSlide--;
  }

  moveToSlide(currentSlide);
  addActiveClass(currentSlide);
};

const initializeSlider = () => {
  btnRight.addEventListener('click', onSlideRightHandler);

  btnLeft.addEventListener('click', onSlideLeftHandler);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowRight') {
      onSlideRightHandler();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowLeft') {
      onSlideLeftHandler();
    }
  });

  dotsContainer.addEventListener('click', (evt) => {
    const target = evt.target.closest('.dots__dot');
    if (!target) return;

    const targetButton = target.dataset.slide;

    moveToSlide(targetButton);
    addActiveClass(targetButton);
  });
};

export {initializeSlider};
