/* eslint-disable spaced-comment */
/*!
{
  "name": "edge",
  "property": "edge"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **Edge** браузера
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name edge
	 */
	Modernizr.addTest('edge', (/ edge\//i.test(window.navigator.userAgent)));
});
