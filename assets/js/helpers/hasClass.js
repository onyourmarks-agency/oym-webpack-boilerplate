module.exports = function (element, classname) {
  return (' ' + element.className + ' ').indexOf(' ' + classname + ' ') > -1;
};
