const TILE_WIDTH: number = 374 + 24;
const UNCENTERED_CLASS: string = 'uncentered';

export enum ScrollableDirection {
  LEFT,
  RIGHT,
}

type DomElementsType = {
  left: HTMLButtonElement;
  right: HTMLButtonElement;
  wrapper: HTMLElement;
  scrollable: Element;
  scrollableInner: HTMLElement;
  items: NodeListOf<Element>;
};

const detectCenteredCards = (dom: DomElementsType): void => {
  const { children } = dom.scrollableInner;
  const { scrollable } = dom;

  for (let i: number = 0; i < children.length; i += 1) {
    const child: Element = children[i];

    const aRect: DOMRect = child.getBoundingClientRect();
    const bRect: DOMRect = scrollable.getBoundingClientRect();

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

const handleControls = (dom: DomElementsType): void => {
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

const onScroll = (dom: DomElementsType): void => {
  let scrollForControls: boolean;
  let scrollForEvents: boolean;

  handleControls(dom);

  const scrollInterval: number = setInterval((): void => {
    if (!scrollForControls) {
      return;
    }

    handleControls(dom);
    scrollForControls = false;
  }, 50);

  dom.wrapper.addEventListener('scroll', (): void => {
    if (scrollForEvents) {
      clearTimeout(scrollInterval);
    }

    setTimeout((): void => {
      detectCenteredCards(dom);
    }, 500);

    scrollForControls = true;
  });
};

const giveNewScrollPosition = (dom: DomElementsType, direction: ScrollableDirection): number =>
  dom.wrapper.scrollLeft + (direction === ScrollableDirection.LEFT ? TILE_WIDTH * -1 : TILE_WIDTH);

const scroll = (dom: DomElementsType, direction: ScrollableDirection): void => {
  dom.wrapper.scroll({
    top: 0,
    left: giveNewScrollPosition(dom, direction),
    behavior: 'smooth',
  });
};

const disableScrollSnap = () => /chrome/i.test(navigator.userAgent);

export const scrollable = (): void => {
  const scrollables: NodeListOf<Element> = document.querySelectorAll('.js-scrollable');

  scrollables.forEach((element: Element): void => {
    const dom: DomElementsType = {
      left: element.querySelector('.js-scrollable-left')!,
      right: element.querySelector('.js-scrollable-right')!,
      wrapper: element.querySelector('.js-scrollable-items')!,
      scrollable: element,
      scrollableInner: element.querySelector('.js-scrollable-inner')!,
      items: element.querySelectorAll('.js-scrollable-inner a')!,
    };

    if (disableScrollSnap()) {
      dom.wrapper.classList.add('disable-scroll-snap');
    }

    // Scroll into view on focus
    dom.items.forEach((item: Element): void => {
      item.addEventListener('focus', () => {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });

    detectCenteredCards(dom);

    dom.left.addEventListener('click', (): void => {
      scroll(dom, ScrollableDirection.LEFT);
    });

    dom.right.addEventListener('click', (): void => {
      scroll(dom, ScrollableDirection.RIGHT);
    });

    onScroll(dom);
  });
};
