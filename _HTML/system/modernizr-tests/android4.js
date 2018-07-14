/* eslint-disable spaced-comment */
/*!
{
  "name": "android4",
  "property": "android4"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android4**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android4
	 */
	Modernizr.addTest('android4', (/android 4\./i.test(window.navigator.userAgent)));
});
