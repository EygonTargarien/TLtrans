/* eslint-disable spaced-comment */
/*!
{
  "name": "android3",
  "property": "android3"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android3**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android3
	 */
	Modernizr.addTest('android3', (/android 3\./i.test(window.navigator.userAgent)));
});
