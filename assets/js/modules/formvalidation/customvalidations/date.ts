export const dateValidation = (field: HTMLElement): boolean => {
  if (!field.classList.contains('js-form-date-result')) {
    return false;
  }

  const wrapper: Element = field.closest('.js-form-date')!;
  const fieldDay: HTMLFormElement | null = wrapper.querySelector('.js-form-date-day');
  const fieldMonth: HTMLFormElement | null = wrapper.querySelector('.js-form-date-month');
  const fieldYear: HTMLFormElement | null = wrapper.querySelector('.js-form-date-year');

  if (!wrapper || !fieldDay || !fieldMonth || !fieldYear) {
    throw new Error('Make sure you have Day, Month and Year form elements');
  }

  return !(fieldDay.value !== '' && fieldMonth.value !== '' && fieldYear.value !== '');
};
