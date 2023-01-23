const loadValidation = async () => {
  const fn = await import('formbouncerjs' /* webpackChunkName: "bouncer-validation" */);

  window.Bouncer = fn.default;

  if (typeof window.Bouncer !== 'function') {
    throw Error("Can't load Bouncer...");
  }

  return this;
};

export default loadValidation;
