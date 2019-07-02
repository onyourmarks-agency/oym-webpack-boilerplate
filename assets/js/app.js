/* eslint-disable import/first */

// Apply SVG polyfill to load external SVG's in unsupported browsers
import 'svgxuse';

// Tests
import storageTests from './tests/is-storage-supported';
import touchTests from './tests/is-touch-device';

// Helpers
import screenWidthHelper from './helpers/screenwidth-in-em';
import browserStorageHelper from './helpers/browser-storage';
import setCookieHelper from './helpers/cookies/set-cookie';
import getCookieHelper from './helpers/cookies/get-cookie';
import removeCookieHelper from './helpers/cookies/remove-cookie';

/* eslint-enable import/first */

/**
 * Set in site or modules used config elements
 */
app.config = {
  breakpoints: {
    sm: 30,
    md: 40,
    lg: 60,
    xl: 74,
    hamburger: 60,
  }
};

/**
 * Test some browser options and make them available in app.test
 */
app.test = {
  isEnvironmentIsDev: window.location.host.indexOf('.ebox') > -1,
  isEnvironmentIsTest: window.location.host.indexOf('.tdebv.nl') > -1,
  isSessionStorageSupported: storageTests('session'),
  isLocalStorageSupported: storageTests('local'),
  isTouchDevice: touchTests(),
};

/**
 * Add some handy helper functions
 */
app.helper = {
  giveScreenWidth: screenWidthHelper,
  localStorage: browserStorageHelper('local'),
  sessionStorage: browserStorageHelper('session'),
  setCookie: setCookieHelper,
  getCookie: getCookieHelper,
  removeCookie: removeCookieHelper,
};

// Make class attributes in window available
import './helpers/class-attributes/_class-attributes';

// Init Form validation
import formValidate from './modules/form/form-validation';
formValidate();
