// Width of item + the spacing between the items
const tileWidth = 374 + 24;
const uncenteredClass = 'uncentered';

/*
 * Add a class if the cards are visible
 */
const detectCenteredCards = (dom) => {
  const { children } = dom.scrollableInner;
  const { scrollable } = dom;

  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];

    const aRect = child.getBoundingClientRect();
    const bRect = scrollable.getBoundingClientRect();

    if (
      aRect.x < bRect.x + bRect.width &&
      aRect.x + aRect.width > bRect.x &&
      aRect.y < bRect.y + bRect.height &&
      aRect.height + aRect.y > bRect.y
    ) {
      child.classList.remove(uncenteredClass);
    } else {
      child.classList.add(uncenteredClass);
    }
  }
};

/*
 * Check the current scrollposition and
 */
const handleControls = (dom) => {
  dom.left.disabled = false;
  dom.left.dataset.visible = 'true';
  dom.right.disabled = false;
  dom.right.dataset.visible = 'true';

  if (dom.wrapper.scrollLeft <= 0) {
    dom.left.disabled = true;
  }

  if (dom.wrapper.scrollLeft >= dom.wrapper.scrollWidth - dom.wrapper.offsetWidth) {
    dom.right.disabled = true;
  }

  if (dom.left.disabled && dom.right.disabled) {
    dom.left.dataset.visible = 'false';
    dom.right.dataset.visible = 'false';
  }
};

/*
 * When scroll inside the wrapper, check if position is start or end
 */
const onScroll = (dom) => {
  let scrollForControls;
  let scrollForEvents;

  // Init on the first time
  handleControls(dom);

  // Check every x seconds for content in here
  setInterval(() => {
    if (!scrollForControls) {
      return;
    }

    handleControls(dom);
    scrollForControls = false;
  }, 50);

  dom.wrapper.addEventListener('scroll', () => {
    if (scrollForEvents) {
      clearTimeout(scrollForEvents);
    }

    setTimeout(() => {
      detectCenteredCards(dom);
    }, 500);

    scrollForControls = true;
  });
};

/*
 * Give the new scroll position, based on viewport size and items that fits
 */
const giveNewScrollPosition = (dom, direction) =>
  dom.wrapper.scrollLeft + (direction === 'left' ? tileWidth * -1 : tileWidth);

/*
 * Scroll to a direction
 */
const scroll = (dom, direction) => {
  dom.wrapper.scroll({
    top: 0,
    left: giveNewScrollPosition(dom, direction),
    behavior: 'smooth',
  });
};

const disableScrollSnap = () => /chrome/i.test(navigator.userAgent);

/**
 * Initialize scroll positions
 */
const init = () => {
  const scrollables = document.querySelectorAll('.js-scrollable');

  scrollables.forEach((element) => {
    const dom = {
      left: element.querySelector('.js-scrollable-left'),
      right: element.querySelector('.js-scrollable-right'),
      wrapper: element.querySelector('.js-scrollable-items'),
      scrollable: element,
      scrollableInner: element.querySelector('.js-scrollable-inner'),
    };

    if (disableScrollSnap()) {
      dom.wrapper.classList.add('disable-scroll-snap');
    }

    detectCenteredCards(dom);

    dom.left.addEventListener('click', () => {
      scroll(dom, 'left');
    });

    dom.right.addEventListener('click', () => {
      scroll(dom, 'right');
    });

    // Manage onscroll
    onScroll(dom);
  });
};

export default init;
