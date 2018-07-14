/* eslint-disable spaced-comment */
/*!
{
  "name": "blink",
  "property": "blink"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **blink** браузеров
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name blink
	 */
	Modernizr.addTest(
		'blink',
		function () {
			var edge = / edge\//i.test(window.navigator.userAgent);
			return ((window.chrome || (window.Intl && window.Intl.v8BreakIterator)) && 'CSS' in window) && !edge;
		}
	);
});
