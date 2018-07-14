/* eslint-disable spaced-comment */
/*!
{
  "name": "edgeandroid",
  "property": "edgeandroid"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **Edge Android** браузера
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name edge-android
	 */
	Modernizr.addTest('edgeandroid', (/\sEdgA\//i.test(window.navigator.userAgent)));
});
