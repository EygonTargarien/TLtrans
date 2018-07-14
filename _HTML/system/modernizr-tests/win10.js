/* eslint-disable spaced-comment */
/*!
{
  "name": "win10",
  "property": "win10"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows 10**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name win10
	 */
	Modernizr.addTest('win10', (/windows nt 10/i.test(window.navigator.userAgent)));
});
