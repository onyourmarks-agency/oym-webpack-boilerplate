import { isLocalStorageSupported, isSessionStorageSupported } from '@tests/is-storage-supported';

export type StorageMethodType = 'local' | 'session';

const constructStorage = (method: StorageMethodType): Storage => {
  if (method === 'local' && isLocalStorageSupported()) {
    return window.localStorage;
  }

  if (isSessionStorageSupported()) {
    return window.sessionStorage;
  }

  return {
    key(): string | null {
      throw new Error('Key is not implemented in mock polyfill');
    },
    length: 0,
    data: {},
    setItem(id: string, val: string): void {
      this.data[id] = val;
      return this.data[id];
    },
    getItem(id: string): string | null {
      return Object.prototype.hasOwnProperty.call(this.data, id) ? this.data[id] : undefined;
    },
    removeItem(id: string): boolean {
      return delete this.data[id];
    },
    clear(): void {
      this.data = {};
      return this.data;
    },
  };
};

export const getBrowserStorage = (storageMethod: StorageMethodType): Storage => {
  if (!globalThis.app.storage[storageMethod]) {
    globalThis.app.storage[storageMethod] = constructStorage(storageMethod);
  }

  return globalThis.app.storage[storageMethod];
};

export const getLocalStorage = (): Storage => getBrowserStorage('local');
export const getSessionStorage = (): Storage => getBrowserStorage('session');
