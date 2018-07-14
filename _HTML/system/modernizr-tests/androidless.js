/* eslint-disable spaced-comment */
/*!
{
  "name": "androidless",
  "property": "androidless"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **androidless** - андроиды 4.3 и младше
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name androidless
	 */
	Modernizr.addTest('androidless', (window.navigator.userAgent.toLowerCase().match(/\sandroid\s([0-3]|4\.[0-3])/i) !== null));
});
