/* eslint-disable spaced-comment */
/*!
{
  "name": "ie10",
  "property": "ie10"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **ie10**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ie10
	 */
	Modernizr.addTest('ie10', (document.all && !!window.atob && !!document.addEventListener));
});
