import Popup from './Popup.svelte';

const openPopup = (target: string, type: string | boolean): void => {
  new Popup({
    target: document.body,
    props: {
      source: target,
      type: type || false,
    },
  });
};

export const popup = (): void => {
  const popupElements: NodeListOf<HTMLElement> | null =
    document.querySelectorAll('[data-popup-content]');

  if (!popupElements.length) {
    return;
  }

  popupElements.forEach((popupElement: HTMLElement): void => {
    popupElement.addEventListener('click', (e: MouseEvent): void => {
      e.preventDefault();

      openPopup(
        popupElement.dataset.popupContent as string,
        popupElement.dataset.popupType as string,
      );
    });
  });
};
