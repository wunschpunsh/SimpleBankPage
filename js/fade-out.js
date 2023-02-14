const navLinks = document.querySelector('.nav');

const setNavLinkFadeOutParam = (evt, opacity) => {
  if (evt.target.classList.contains('nav__link')) {
    const linkOver = evt.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('nav').querySelector('.nav__logo');
    const bankTitle = linkOver.closest('nav').querySelector('.nav__text');

    siblingLinks.forEach((link) => {
      if (link !== linkOver) {
        link.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
    bankTitle.style.opacity = opacity;
  }
};

const initializeFadeOut = () => {
  navLinks.addEventListener('mouseover', (evt) => {
    setNavLinkFadeOutParam(evt, 0.3);
  });

  navLinks.addEventListener('mouseout', (evt) => {
    setNavLinkFadeOutParam(evt, 1);
  });
};

export {initializeFadeOut};
