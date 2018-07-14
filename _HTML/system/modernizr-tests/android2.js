/* eslint-disable spaced-comment */
/*!
{
  "name": "android2",
  "property": "android2"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android2**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android2
	 */
	Modernizr.addTest('android2', (/android 2\./i.test(window.navigator.userAgent)));
});
