const asyncLoader = async () => {
  const scrollableModule = await import('./init' /* webpackChunkName: "scrollable" */);
  scrollableModule.default();
};

export default () => {
  if (!document.querySelector('.js-image-slider')) {
    return;
  }

  asyncLoader().catch();
};
