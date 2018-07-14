/* eslint-disable spaced-comment */
/*!
{
  "name": "windowsphone",
  "property": "windowsphone"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **chrome**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name chrome
	*/
	Modernizr.addTest(
		'windowsphone',
		function () {
			var ua = window.navigator.userAgent.toLowerCase();
			return /Windows\sPhone/i.test(ua);
		}
	);
});
