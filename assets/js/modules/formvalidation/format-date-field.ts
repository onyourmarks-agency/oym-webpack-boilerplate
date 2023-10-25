let valueDay: string = '';
let valueMonth: string = '';
let valueYear: string = '';
let valueResult: string = '';

const updateDate = (element: HTMLElement): void => {
  const fieldResult: HTMLInputElement | null = element.querySelector('.js-form-date-result');

  if (!fieldResult) {
    return;
  }

  valueResult = `${valueYear}-${valueMonth}-${valueDay}`;
  fieldResult.value = valueResult;
};

export const formatDateField = (): void => {
  const dateField: NodeListOf<HTMLElement> | null = document.querySelectorAll('.js-form-date');

  if (!dateField) {
    return;
  }

  dateField.forEach((element: HTMLElement): void => {
    const fieldDay: HTMLInputElement | null = element.querySelector('.js-form-date-day');
    const fieldMonth: HTMLInputElement | null = element.querySelector('.js-form-date-month');
    const fieldYear: HTMLInputElement | null = element.querySelector('.js-form-date-year');

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
