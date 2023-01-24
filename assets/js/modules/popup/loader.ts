const asyncLoader = async () => {
  const popupModule = await import('./init' /* webpackChunkName: "popup" */);
  popupModule.default();
};

export default () => {
  if (!document.querySelectorAll('[data-popup-content]')) {
    return;
  }

  asyncLoader().catch();
};
