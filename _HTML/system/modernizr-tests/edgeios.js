/* eslint-disable spaced-comment */
/*!
{
  "name": "edgeios",
  "property": "edgeios"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **Edge iOS** браузера
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name edge-ios
	 */
	Modernizr.addTest('edgeios', (/\sEdgiOS\//i.test(window.navigator.userAgent)));
});
