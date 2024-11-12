import { mount } from 'svelte';
import Hamburger from './Hamburger.svelte';

export const hamburger = (): void => {
  const hamburgerElement: Element | null = document.querySelector('.js-hamburger');

  if (!hamburgerElement) {
    return;
  }

  mount(Hamburger, {
    target: hamburgerElement,
  });
};
