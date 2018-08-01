/* eslint-disable import/first */

// Apply SVG polyfill to load external SVG's in unsupported browsers
import 'svgxuse';

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
  isSessionStorageSupported: require('./tests/is-storage-supported')('session'),
  isLocalStorageSupported: require('./tests/is-storage-supported')('local'),
  isTouchDevice: require('./tests/is-touch-device')(),
};

/**
 * Add some handy helper functions
 */
app.helper = {
  giveScreenWidth: require('./helpers/screenwidth-in-em'),
  localStorage: require('./helpers/browser-storage')('local'),
  sessionStorage: require('./helpers/browser-storage')('session'),
  setCookie: require('./helpers/cookies/set-cookie'),
  getCookie: require('./helpers/cookies/get-cookie'),
  removeCookie: require('./helpers/cookies/remove-cookie'),
};

// Make class attributes in window available
import './helpers/class-attributes/_class-attributes';
