export default new Promise(function(resolve, reject) {
  import('formbouncerjs' /* webpackChunkName: "bouncer-validation" */ ).then(function (fn) {
    window.Bouncer = fn.default;

    if (typeof window.Bouncer === 'function') {
      resolve(this);
    } else {
      reject(Error('can\'t load Bouncer...'));
    }
  });
});
