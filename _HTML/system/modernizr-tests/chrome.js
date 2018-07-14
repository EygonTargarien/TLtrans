/* eslint-disable spaced-comment */
/*!
{
  "name": "chrome",
  "property": "chrome"
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
		'chrome',
		function () {
			var ua = window.navigator.userAgent;
			var chrome = !!window.chrome && ua.match(/Opera|OPR\//i) === null;
			var edge = / edge\//i.test(ua);
			return chrome && !edge;
		}
	);
});
