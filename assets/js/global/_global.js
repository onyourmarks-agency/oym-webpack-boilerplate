/**
 * Adds global functions or values and make this available in app.global
 */
app.global = {
  screenWidth: require('./screenWidthEm'),
  isTouchDevice: require('./isTouchDevice'),
  isTestEnvironment: window.location.host.indexOf('.nl.ebox') > -1 || window.location.host.indexOf('.e-staging.nl') > -1,
  hasLocalStorageSupport: require('./hasLocalStorageSupport')
};

// Config
app.config = {
	breakpoints: {
		sm: 30,
		md: 40,
		lg: 60,
		xl: 74,
		nav: 60
	}
};