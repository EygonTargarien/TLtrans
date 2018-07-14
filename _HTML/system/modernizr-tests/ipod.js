/* eslint-disable spaced-comment */
/*!
{
  "name": "ipod",
  "property": "ipod"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **ipod**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ipd
	 */
	Modernizr.addTest('ipod', (/ipod/i.test(window.navigator.userAgent)));
});
