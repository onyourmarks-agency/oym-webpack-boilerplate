const loader = async (): Promise<void> => {
  const formbouncerjs = await import('formbouncerjs' /* webpackChunkName: "bouncer-validation" */);

  window.Bouncer = formbouncerjs.default;

  if (typeof window.Bouncer !== 'function') {
    throw Error("Can't load Bouncer...");
  }

  return this;
};

export default loader;
