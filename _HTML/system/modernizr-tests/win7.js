/* eslint-disable spaced-comment */
/*!
{
  "name": "win7",
  "property": "win7"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows 7**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name win7
	 */
	Modernizr.addTest('win7', (/windows nt 6\.1/i.test(window.navigator.userAgent)));
});
