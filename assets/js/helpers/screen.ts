/**
 * Return window.innerwidth in <em> format based on font-size
 */
const screenWidthEm = (): number =>
  window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body')!)['font-size']);

export default screenWidthEm;
