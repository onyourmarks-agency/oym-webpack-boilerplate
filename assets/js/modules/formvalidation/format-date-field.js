let valueDay = '';
let valueMonth = '';
let valueYear = '';
let valueResult = '';

const updateDate = (element) => {
  const fieldResult = element.querySelector('.js-form-date-result');

  valueResult = `${valueYear}-${valueMonth}-${valueDay}`;
  fieldResult.value = valueResult;
};

const init = () => {
  const dateField = document.querySelectorAll('.js-form-date');

  if (!dateField) {
    return;
  }

  dateField.forEach((element) => {
    const fieldDay = element.querySelector('.js-form-date-day');
    const fieldMonth = element.querySelector('.js-form-date-month');
    const fieldYear = element.querySelector('.js-form-date-year');

    if (!fieldDay || !fieldMonth || !fieldYear) {
      throw new Error('Make sure you have Day, Month and Year selects');
    }

    fieldDay.addEventListener('change', (e) => {
      valueDay = e.target.value;
      updateDate(element);
    });

    fieldMonth.addEventListener('change', (e) => {
      valueMonth = e.target.value;
      updateDate(element);
    });

    fieldYear.addEventListener('change', (e) => {
      valueYear = e.target.value;
      updateDate(element);
    });
  });
};

export default init;
