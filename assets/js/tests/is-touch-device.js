/**
 * Useful environment variable to see if we're dealing with a touch device
 *
 * @type {Boolean}
 */
module.exports = function () {
  const msGesture = window.navigator && window.navigator.msMaxTouchPoints && window.MSGesture;
  const touch = (( 'ontouchstart' in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);

  return !!touch;
};
