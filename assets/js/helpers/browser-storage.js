module.exports = function (method) {

  if (method === 'local') {
    if (app.test.isLocalStorageSupported) {
      return window.localStorage;
    }
  } else {
    if (app.test.isSessionStorageSupported) {
      return window.sessionStorage;
    }
  }

  return {
    _data: {},
    setItem: function (id, val) {
      return this._data[id] = String(val);
    },
    getItem: function (id) {
      return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
    },
    removeItem: function (id) {
      return delete this._data[id];
    },
    clear: function () {
      return this._data = {};
    }
  };
};
