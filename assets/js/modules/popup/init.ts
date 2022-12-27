import Popup from './Popup.svelte';

/**
 * Open popup with given target
 * @param target
 * @param type
 */
const openPopup = (target: string, type: string | boolean) => {
  new Popup({
    target: document.body,
    props: {
      source: target,
      type: type || false,
    },
  });
};

const init = () => {
  const popup = document.querySelectorAll('[data-popup-content]') as NodeListOf<HTMLElement>;

  if (!popup.length) {
    return;
  }

  popup.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      openPopup(element.dataset.popupContent as string, element.dataset.popupType as string);
    });
  });
};

export default init;
