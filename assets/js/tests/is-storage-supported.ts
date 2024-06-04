import type { StorageMethodType } from '@helpers/browser-storage';

export const isStorageSupported = (storage: StorageMethodType): boolean => {
  try {
    const storageObject: Storage = window[`${storage}Storage`];
    const testKey: string = 'test';

    storageObject.setItem(testKey, '1');
    storageObject.removeItem(testKey);

    return true;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false;
  }
};

export const isSessionStorageSupported = () => isStorageSupported('session');

export const isLocalStorageSupported = () => isStorageSupported('local');
