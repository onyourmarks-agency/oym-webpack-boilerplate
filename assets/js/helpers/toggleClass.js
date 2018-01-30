module.exports = function (element, classname) {
	if ( hasClass(element, classname) ) {
		removeClass(element, classname);
	} else {
		addClass(element, classname);
	}
};
