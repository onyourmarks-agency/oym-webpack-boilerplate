import Popup from './Popup.svelte';

/**
 * Open popup with given target
 * @param target
 * @param type
 */
const openPopup = (target, type) => {
  new Popup({
    target: document.body,
    props: {
      source: target,
      type: type || false,
    },
  });
};

const init = () => {
  const popup = document.querySelectorAll('[data-popup-content]');

  if (!popup.length) {
    return;
  }

  popup.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      openPopup(element.dataset.popupContent, element.dataset.popupType);
    });
  });
};

export default init;
