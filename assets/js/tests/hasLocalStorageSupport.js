module.exports = function () {
	const testKey = 'test';
	const storage = window.sessionStorage;

	try {
		storage.setItem(testKey, '1');
		storage.removeItem(testKey);
		return true;
	} catch (error) {
		return false;
	}
};
