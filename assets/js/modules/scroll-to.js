import jump from 'jump.js';

const init = () => {
  const scrollToItem = document.querySelectorAll('[data-scroll-to]');

  scrollToItem.forEach((element) => {
    element.addEventListener('click', () => {
      jump(element.dataset.scrollTo, {
        duration: 1500,
        offset: -96,
      });
    });
  });
};

export default init;
