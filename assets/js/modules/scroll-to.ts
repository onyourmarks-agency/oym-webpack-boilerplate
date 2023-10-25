import jump from 'jump.js';

export const scrollTo = (): void => {
  const scrollToItem: HTMLElement[] = document.querySelectorAll(
    '[data-scroll-to]',
  ) as unknown as Array<HTMLElement>;

  scrollToItem.forEach((element: HTMLElement) => {
    element.addEventListener('click', () => {
      jump(element.dataset.scrollTo as string, {
        duration: 1500,
        offset: -96,
      });
    });
  });
};
