/* global app */
export type StorageMethodType = 'local' | 'session';

const storage = (method: StorageMethodType) => {
  if (method === 'local') {
    if (app.test.isLocalStorageSupported) {
      return window.localStorage;
    }
  } else if (app.test.isSessionStorageSupported) {
    return window.sessionStorage;
  }

  return {
    data: {},
    setItem(id: string, val: string) {
      this.data[id] = val;
      return this.data[id];
    },
    getItem(id: string) {
      return Object.prototype.hasOwnProperty.call(this.data, id) ? this.data[id] : undefined;
    },
    removeItem(id: string) {
      return delete this.data[id];
    },
    clear() {
      this.data = {};
      return this.data;
    },
  };
};

export default storage;
