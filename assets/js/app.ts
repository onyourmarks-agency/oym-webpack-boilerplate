import { activeNavigation } from '@modules/active-navigation';
import { formValidation } from '@modules/formvalidation';
import { hamburger } from '@modules/hamburger';
import { scrollTo } from '@modules/scroll-to';
import { windowSize } from '@modules/window-size';
import imageSliderLoader from '@modules/image-slider/loader';
import popupLoader from '@modules/popup/loader';
import scrollableLoader from '@modules/scrollable/loader';

globalThis.app.config = {
  breakpoints: {
    sm: 30,
    md: 40,
    lg: 60,
    xl: 73.125,
    hamburger: 60,
  },
};

activeNavigation();
formValidation().catch();
hamburger();
scrollTo();
windowSize();

// Chunks
imageSliderLoader();
popupLoader();
scrollableLoader();
