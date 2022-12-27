// Width of item + the spacing between the items
const TILE_WIDTH = 374 + 24;
const UNCENTERED_CLASS = 'uncentered';

export enum ScrollableDirection {
    LEFT,
    RIGHT,
}

type DomElementsType = {
  left: HTMLButtonElement,
  right: HTMLButtonElement,
  wrapper: HTMLElement,
  scrollable: Element,
  scrollableInner: HTMLElement,
}

/*
 * Add a class if the cards are visible
 */
const detectCenteredCards = (dom: DomElementsType) => {
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
      child.classList.remove(UNCENTERED_CLASS);
    } else {
      child.classList.add(UNCENTERED_CLASS);
    }
  }
};

/*
 * Check the current scrollposition and
 */
const handleControls = (dom: DomElementsType) => {
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
const onScroll = (dom: DomElementsType): void => {
  let scrollForControls: boolean;
  let scrollForEvents: boolean;

  // Init on the first time
  handleControls(dom);

  // Check every x seconds for content in here
  const scrollInterval = setInterval(() => {
    if (!scrollForControls) {
      return;
    }

    handleControls(dom);
    scrollForControls = false;
  }, 50);

  dom.wrapper.addEventListener('scroll', () => {
    if (scrollForEvents) {
      clearTimeout(scrollInterval);
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
const giveNewScrollPosition = (dom: DomElementsType, direction: ScrollableDirection): number =>
  dom.wrapper.scrollLeft + (direction === ScrollableDirection.LEFT ? TILE_WIDTH * -1 : TILE_WIDTH);

/*
 * Scroll to a direction
 */
const scroll = (dom: DomElementsType, direction: ScrollableDirection): void => {
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
const init = (): void => {
  const scrollables = document.querySelectorAll('.js-scrollable');

  scrollables.forEach((element: Element) => {
    const dom: DomElementsType = {
      left: element.querySelector('.js-scrollable-left')!,
      right: element.querySelector('.js-scrollable-right')!,
      wrapper: element.querySelector('.js-scrollable-items')!,
      scrollable: element,
      scrollableInner: element.querySelector('.js-scrollable-inner')!,
    };

    if (disableScrollSnap()) {
      dom.wrapper.classList.add('disable-scroll-snap');
    }

    detectCenteredCards(dom);

    dom.left.addEventListener('click', () => {
      scroll(dom, ScrollableDirection.LEFT);
    });

    dom.right.addEventListener('click', () => {
      scroll(dom, ScrollableDirection.RIGHT);
    });

    // Manage onscroll
    onScroll(dom);
  });
};

export default init;
