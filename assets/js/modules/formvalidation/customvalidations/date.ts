/**
 * Check if day month and year all have a value
 * @param field
 * @returns {boolean}
 */
export default (field: HTMLElement): boolean => {
  if (!field.classList.contains('js-form-date-result')) {
    return false;
  }

  const wrapper = field.closest('.js-form-date')!;
  const fieldDay = wrapper.querySelector('.js-form-date-day') as HTMLFormElement;
  const fieldMonth = wrapper.querySelector('.js-form-date-month') as HTMLFormElement;
  const fieldYear = wrapper.querySelector('.js-form-date-year') as HTMLFormElement;

  return !(fieldDay.value !== '' && fieldMonth.value !== '' && fieldYear.value !== '');
};
