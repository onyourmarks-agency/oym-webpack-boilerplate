import 'svgxuse';

import formvalidation from '@modules/formvalidation/init';
import activeNavigation from '@modules/active-navigation';
import hamburger from '@modules/hamburger/init';
import scrollTo from '@modules/scroll-to';
import windowSize from '@modules/window-size';
import popupLoader from '@modules/popup/loader';
import imageSliderLoader from '@modules/image-slider/loader';
import scrollableLoader from '@modules/scrollable/loader';

// Set config elements
globalThis.app.config = {
  breakpoints: {
    sm: 30,
    md: 40,
    lg: 60,
    xl: 73.125,
    hamburger: 60,
  },
};

formvalidation();
activeNavigation();
hamburger();
scrollTo();
windowSize();
popupLoader();
imageSliderLoader();
scrollableLoader();
