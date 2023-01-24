const asyncLoader = async () => {
  const imageSliderModule = await import('./init' /* webpackChunkName: "image-slider" */);
  imageSliderModule.default();
};

export default () => {
  if (!document.querySelector('.js-image-slider')) {
    return;
  }

  asyncLoader().catch();
};
