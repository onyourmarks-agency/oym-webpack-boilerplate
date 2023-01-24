import Hamburger from './Hamburger.svelte';

const init = (): void => {
  const hamburger = document.querySelector('.js-hamburger');

  if (!hamburger) {
    return;
  }

  new Hamburger({
    target: hamburger,
  });
};

export default init;
