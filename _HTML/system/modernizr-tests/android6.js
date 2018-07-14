/* eslint-disable spaced-comment */
/*!
{
  "name": "android6",
  "property": "android6"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android6**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android6
	 */
	Modernizr.addTest('android6', (/android 6\./i.test(window.navigator.userAgent)));
});
