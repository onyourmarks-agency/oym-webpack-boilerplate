import { formClassNames } from '../config';

/**
 * Validate field. At leaste one checkbox is checked
 * @param field
 * @returns {boolean}
 */
export default (field: HTMLElement): boolean => {
  const wrapper = field.closest('[data-bouncer-at-least-one-checkbox]');

  if (!wrapper) {
    return false;
  }

  const checkboxes = wrapper.querySelectorAll('[type="checkbox"]') as NodeListOf<HTMLInputElement>;

  if (!checkboxes.length) {
    return false;
  }

  const errorWrapper = wrapper.querySelector(
    checkboxes[0].dataset.bouncerTarget as string
  ) as HTMLElement;
  let checkedCount = 0;

  for (let i = 0; i < checkboxes.length; i += 1) {
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
    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].classList.remove(formClassNames.errorClass);
    }
  }

  return checkedCount === 0;
};
