const isTouchDevice = (): boolean => {
  const msGesture = window.navigator && (window as any).navigator.msMaxTouchPoints && (window as any).MSGesture;
    const touch =
    'ontouchstart' in window ||
    msGesture ||
    ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch);

  return !!touch;
};

export default isTouchDevice;
