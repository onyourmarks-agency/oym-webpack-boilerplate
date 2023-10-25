export const screenWidthEm = (): number => {
  const bodyStyle: CSSStyleDeclaration = getComputedStyle(
    document.querySelector('body') as Element,
  );
  const bodyFontSize: number = parseFloat(bodyStyle.getPropertyValue('font-size'));
  return window.innerWidth / bodyFontSize;
};
