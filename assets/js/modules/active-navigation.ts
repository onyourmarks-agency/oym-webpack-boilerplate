const selectors = {
  base: '.header__navigation a',
  hasSubs: '.header__navigation__listitem--has-sub',
};
const activeClassname: string = 'header__navigation__listitem--active';
const currentUrl: string = window.location.origin + window.location.pathname;
let activeItemMatched: boolean = false;

const makeNavItemActive = (item: HTMLLinkElement): void => {
  item.classList.add(activeClassname);
};

const matchActiveNavItems = (item: HTMLLinkElement): void => {
  const replacedCurrentUrl: string = currentUrl.replace(window.location.origin, '');
  const replacedUrl: string = item.href.replace(window.location.origin, '');

  if (replacedUrl === '/' && (replacedCurrentUrl !== replacedUrl || activeItemMatched)) {
    return;
  }

  if (replacedCurrentUrl.indexOf(replacedUrl) === -1 || activeItemMatched) {
    return;
  }

  makeNavItemActive(item.parentElement as HTMLLinkElement);
  const closestParent: HTMLLinkElement | null = item.closest(selectors.hasSubs);

  if (closestParent) {
    makeNavItemActive(closestParent);
    closestParent.setAttribute('open', '');
  }

  activeItemMatched = true;
};

export const activeNavigation = (): void => {
  const linkElements: NodeListOf<HTMLLinkElement> = document.querySelectorAll(selectors.base);
  linkElements.forEach((linkElement: HTMLLinkElement): void => {
    matchActiveNavItems(linkElement);
  });
};
