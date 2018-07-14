/* eslint-disable spaced-comment */
/*!
{
  "name": "android5",
  "property": "android5"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android5**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android5
	 */
	Modernizr.addTest('android5', (/android 5\./i.test(window.navigator.userAgent)));
});
