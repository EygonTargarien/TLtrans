/* eslint-disable spaced-comment */
/*!
{
  "name": "ie",
  "property": "ie"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **ie**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ie
	 */
	Modernizr.addTest('ie', (document.documentMode));
});
