/**
 * Get clientWidth of element
 */
const setWidth = () => {
  document.documentElement.style.setProperty('--window-width', `${document.body.clientWidth}px`);
};

/**
 * Kickstart the width and set an eventlistener
 */
const init = () => {
  setWidth();

  window.addEventListener('resize', () => {
    setWidth();
  });
};

export default init;
