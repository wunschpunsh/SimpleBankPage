import {initializeModal} from './js/modal.js';
import {initializeScrollTo} from './js/scroll.js';
import {initializeTabContent} from './js/tab.js';
import {initializeFadeOut} from './js/fade-out.js';
import {initializeStickyNav} from './js/sticky-nav.js';

window.addEventListener('DOMContentLoaded', () => {
  initializeModal();
  initializeScrollTo();
  initializeTabContent();
  initializeFadeOut();
  initializeStickyNav();
});
