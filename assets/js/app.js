/* global app */

// Apply SVG polyfill to load external SVG's in unsupported browsers
import 'svgxuse';

// Import tests
import storageTests from './tests/is-storage-supported';
import touchTests from './tests/is-touch-device';

// Import helpers
import screenWidthHelper from './helpers/screenwidth-in-em';
import browserStorageHelper from './helpers/browser-storage';
import setCookieHelper from './helpers/cookies/set-cookie';
import getCookieHelper from './helpers/cookies/get-cookie';
import removeCookieHelper from './helpers/cookies/remove-cookie';
import hasClassHelper from './helpers/has-class';

// Set config elements
app.config = {
  breakpoints: {
    sm: 30,
    md: 40,
    lg: 60,
    xl: 74,
    hamburger: 60,
  },
};

// Test some browser options and make them available in app.test
app.test = {
  isSessionStorageSupported: storageTests('session'),
  isLocalStorageSupported: storageTests('local'),
  isTouchDevice: touchTests(),
  isEnvironmentIsDev: window.location.host.indexOf('.tdev.team') > -1,
  isEnvironmentIsTest:
    window.location.host.indexOf('.tdebv.nl') > -1 || window.location.host.indexOf('staging') > -1,
};

// Add some handy helper functions and make them available in app.helper
app.helper = {
  giveScreenWidth: screenWidthHelper,
  localStorage: browserStorageHelper('local'),
  sessionStorage: browserStorageHelper('session'),
  setCookie: setCookieHelper,
  getCookie: getCookieHelper,
  removeCookie: removeCookieHelper,
  hasClass: hasClassHelper,
};

// TEMP
import formvalidation from './modules/formvalidation/init';
import activeNavigation from './modules/active-navigation';
import hamburger from './modules/hamburger/init';
import popup from './modules/popup/init';
import scrollTo from './modules/scroll-to';
import windowSize from './modules/window-size';
import imageSlider from './modules/image-slider';
import scrollable from './modules/scrollable';

formvalidation();
activeNavigation();
hamburger();
popup();
scrollTo();
windowSize();
imageSlider();
scrollable();
