import Swiper, { Navigation, Pagination } from 'swiper';

const init = () => {
  Swiper.use([Navigation, Pagination]);

  new Swiper('.js-image-slider', {
    loop: false,
    pagination: {
      el: '.image-slider__pagination',
    },
    navigation: {
      nextEl: '.image-slider__button--next',
      prevEl: '.image-slider__button--prev',
      disabledClass: '.image-slider__button--disabled',
    },
  });
};

export default init;
