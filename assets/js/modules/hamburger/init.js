import Table from './Hamburger.svelte';

const init = () => {
  const hamburger = document.querySelector('.js-hamburger');

  if (!hamburger) {
    return;
  }

  new Table({
    target: hamburger,
  });
};

export default init;
