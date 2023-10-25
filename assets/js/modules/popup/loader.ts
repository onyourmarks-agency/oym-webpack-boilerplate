const asyncLoader = async (): Promise<void> => {
  const { popup } = await import('./index' /* webpackChunkName: "popup" */);
  popup();
};

export default (): void => {
  if (!document.querySelectorAll('[data-popup-content]')) {
    return;
  }

  asyncLoader().catch();
};
