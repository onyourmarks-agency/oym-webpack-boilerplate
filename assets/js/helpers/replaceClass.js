module.exports = function (element, classname) {
	if ( hasClass(element, classname) ) {
		const reg = new RegExp('(\\s|^)' + classname + '(\\s|$)');

		element.className = element.className.replace(reg, ' ');
	}
};