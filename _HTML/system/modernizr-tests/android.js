/* eslint-disable spaced-comment */
/*!
{
  "name": "android",
  "property": "android"
}
!*/

/**
 * Набор пользовательских тестов для `modernizr.js`.
 * @namespace modernizrTests
*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **android**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name android
	*/
	Modernizr.addTest('android', (/android/i.test(window.navigator.userAgent)));
});
