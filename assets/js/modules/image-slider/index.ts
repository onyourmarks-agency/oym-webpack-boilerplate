import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const imageSlider = (): void => {
  new Swiper('.js-image-slider', {
    modules: [Navigation, Pagination],
    loop: false,
    pagination: {
      el: '.image-slider__pagination',
    },
    navigation: {
      nextEl: '.image-slider__button--next',
      prevEl: '.image-slider__button--prev',
      disabledClass: 'image-slider__button--disabled',
    },
  });
};
