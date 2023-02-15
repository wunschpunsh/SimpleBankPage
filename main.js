import {initializeModal} from './js/modal.js';
import {initializeScrollTo} from './js/scroll.js';
import {initializeTabContent} from './js/tab.js';
import {initializeFadeOut} from './js/fade-out.js';
import {initializeStickyNav} from './js/sticky-nav.js';
import {initializeShowBlocks} from './js/show-blocks.js';
import {initializeLazyLoading} from './js/lazy-loading.js';
import {initializeSlider} from './js/slider.js';

window.addEventListener('DOMContentLoaded', () => {
  initializeModal();
  initializeScrollTo();
  initializeTabContent();
  initializeFadeOut();
  initializeStickyNav();
  initializeShowBlocks();
  initializeLazyLoading();
  initializeSlider();
});
