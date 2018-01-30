module.exports = function (element, classname) {
	if ( !hasClass(element, classname) ) {
		element.className += " " + classname;
	}
}