/**
 * Get clientWidth of element
 */
const setSizes = () => {
  document.documentElement.style.setProperty('--window-width', `${document.body.clientWidth}px`);
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
};

const init = () => {
  setSizes();

  window.addEventListener('resize', () => {
    setSizes();
  });
};

export default init;
