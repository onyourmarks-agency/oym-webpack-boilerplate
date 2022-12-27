/**
 * Get clientWidth of element
 */
const setSizes = (): void => {
  document.documentElement.style.setProperty('--window-width', `${document.body.clientWidth}px`);
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
};

const init = (): void => {
  setSizes();

  window.addEventListener('resize', () => {
    setSizes();
  });
};

export default init;
