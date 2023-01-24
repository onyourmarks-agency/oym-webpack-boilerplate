import type { StorageMethodType } from '@helpers/browser-storage';

const isStorageSupported = (storage: StorageMethodType): boolean => {
  try {
    const storageObject = window[`${storage}Storage`];
    const testKey = 'test';

    storageObject.setItem(testKey, '1');
    storageObject.removeItem(testKey);

    return true;
  } catch (error) {
    return false;
  }
};

export const isSessionStorageSupported = () => isStorageSupported('session');

export const isLocalStorageSupported = () => isStorageSupported('local');

export default isStorageSupported;