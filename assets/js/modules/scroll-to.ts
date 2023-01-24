import jump from 'jump.js';

const init = (): void => {
  const scrollToItem = document.querySelectorAll(
    '[data-scroll-to]'
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

export default init;
