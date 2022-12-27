const selectors = {
  base: '.header__navigation a',
  hasSubs: '.header__navigation__listitem--has-sub',
};
const activeClassname = 'header__navigation__listitem--active';
const currentUrl = window.location.origin + window.location.pathname;
let activeItemMatched = false;

/**
 * Add class from activeClassname
 * @param item
 */
const makeNavItemActive = (item: HTMLLinkElement): void => {
  item.classList.add(activeClassname);
};

/**
 * Give a link and match the first one who's active
 * @param item
 */
const matchActiveNavItems = (item: HTMLLinkElement): void => {
  const replacedCurrentUrl = currentUrl.replace(window.location.origin, '');
  const replacedUrl = item.href.replace(window.location.origin, '');

  if (replacedUrl === '/' && (replacedCurrentUrl !== replacedUrl || activeItemMatched)) {
    return;
  }

  if (replacedCurrentUrl.indexOf(replacedUrl) === -1 || activeItemMatched) {
    return;
  }

  makeNavItemActive((item.parentElement as HTMLLinkElement));
  const closestParent = item.closest(selectors.hasSubs) as HTMLLinkElement;

  if (closestParent) {
    makeNavItemActive(closestParent);
    closestParent.setAttribute('open', '');
  }

  activeItemMatched = true;
};

/**
 * Loop over all base-matched elements
 */
const init = (): void => {
  const linkElements = document.querySelectorAll(selectors.base) as NodeListOf<HTMLLinkElement>;
  linkElements.forEach((linkElement: HTMLLinkElement) => {
    matchActiveNavItems(linkElement);
  });
};

export default init;
