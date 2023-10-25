export const isAtLeastOneCheckboxCheckedValidation = (
  field: HTMLElement,
  errorClass: string,
): boolean => {
  const wrapper: Element | null = field.closest('[data-bouncer-at-least-one-checkbox]');

  if (!wrapper) {
    return false;
  }

  const checkboxes: NodeListOf<HTMLInputElement> = wrapper.querySelectorAll('[type="checkbox"]');

  if (!checkboxes.length) {
    return false;
  }

  const errorWrapper: HTMLElement | null = wrapper.querySelector(
    checkboxes[0].dataset.bouncerTarget as string,
  );

  if (!errorWrapper) {
    throw new Error('Make sure you have an error wrapper');
  }

  let checkedCount: number = 0;

  for (let i: number = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      checkedCount += 1;
    }
  }

  if (errorWrapper) {
    while (errorWrapper.childNodes.length > 0) {
      errorWrapper.removeChild(errorWrapper.lastChild!);
    }
  }

  if (checkedCount > 0) {
    for (let i: number = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].classList.remove(errorClass);
    }
  }

  return checkedCount === 0;
};
