/**
 * Check if day month and year all have a value
 * @param field
 * @returns {boolean}
 */
export default (field) => {
  if (!field.classList.contains('js-form-date-result')) {
    return false;
  }

  const wrapper = field.closest('.js-form-date');
  const fieldDay = wrapper.querySelector('.js-form-date-day');
  const fieldMonth = wrapper.querySelector('.js-form-date-month');
  const fieldYear = wrapper.querySelector('.js-form-date-year');

  return !(fieldDay.value !== '' && fieldMonth.value !== '' && fieldYear.value !== '');
};
