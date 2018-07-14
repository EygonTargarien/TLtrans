/* eslint-disable spaced-comment */
/*!
{
  "name": "android8",
  "property": "android8"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android8**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android8
	 */
	Modernizr.addTest('android8', (/android 8\./i.test(window.navigator.userAgent)));
});
