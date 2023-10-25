const setSizes = (): void => {
  document.documentElement.style.setProperty('--window-width', `${document.body.clientWidth}px`);
  document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
};

export const windowSize = (): void => {
  setSizes();

  window.addEventListener('resize', () => {
    setSizes();
  });
};
