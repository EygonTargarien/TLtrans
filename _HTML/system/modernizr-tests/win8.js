/* eslint-disable spaced-comment */
/*!
{
  "name": "win8",
  "property": "win8"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows 8**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name win8
	 */
	Modernizr.addTest(
		'win8',
		function () {
			var ua = navigator.userAgent.toLowerCase();
			return ua.indexOf('windows nt 6.2') > 0 || ua.indexOf('windows nt 6.3') > 0;
		}
	);
});
