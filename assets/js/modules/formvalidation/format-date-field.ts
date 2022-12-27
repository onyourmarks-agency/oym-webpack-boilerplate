let valueDay = '';
let valueMonth = '';
let valueYear = '';
let valueResult = '';

const updateDate = (element: HTMLElement) => {
  const fieldResult = element.querySelector('.js-form-date-result') as HTMLInputElement;

  valueResult = `${valueYear}-${valueMonth}-${valueDay}`;
  fieldResult.value = valueResult;
};

const init = () => {
  const dateField = document.querySelectorAll('.js-form-date') as NodeListOf<HTMLElement>;

  if (!dateField) {
    return;
  }

  dateField.forEach((element: HTMLElement) => {
    const fieldDay = element.querySelector('.js-form-date-day') as HTMLInputElement;
    const fieldMonth = element.querySelector('.js-form-date-month') as HTMLInputElement;
    const fieldYear = element.querySelector('.js-form-date-year') as HTMLInputElement;

    if (!fieldDay || !fieldMonth || !fieldYear) {
      throw new Error('Make sure you have Day, Month and Year selects');
    }

    fieldDay.addEventListener('change', (event: Event) => {
      valueDay = (event.target as HTMLInputElement).value;
      updateDate(element);
    });

    fieldMonth.addEventListener('change', (event: Event) => {
      valueMonth = (event.target as HTMLInputElement).value;
      updateDate(element);
    });

    fieldYear.addEventListener('change', (event: Event) => {
      valueYear = (event.target as HTMLInputElement).value;
      updateDate(element);
    });
  });
};

export default init;
