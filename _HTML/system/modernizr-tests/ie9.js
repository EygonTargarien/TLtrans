/* eslint-disable spaced-comment */
/*!
{
  "name": "ie9",
  "property": "ie9"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **ie9**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ie9
	 */
	Modernizr.addTest('ie9', (document.all && !window.atob && !!document.addEventListener));
});
