const asyncLoader = async (): Promise<void> => {
  const { imageSlider } = await import('./index' /* webpackChunkName: "image-slider" */);
  imageSlider();
};

export default (): void => {
  if (!document.querySelector('.js-image-slider')) {
    return;
  }

  asyncLoader().catch();
};
