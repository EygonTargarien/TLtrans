/* eslint-disable spaced-comment */
/*!
{
  "name": "android7",
  "property": "android7"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android7**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android7
	 */
	Modernizr.addTest('android7', (/android 7\./i.test(window.navigator.userAgent)));
});
