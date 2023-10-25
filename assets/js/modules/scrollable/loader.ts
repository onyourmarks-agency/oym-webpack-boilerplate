const asyncLoader = async (): Promise<void> => {
  const { scrollable } = await import('./index' /* webpackChunkName: "scrollable" */);
  scrollable();
};

export default (): void => {
  if (!document.querySelector('.js-scrollable')) {
    return;
  }

  asyncLoader().catch();
};
