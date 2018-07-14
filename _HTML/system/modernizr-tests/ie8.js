/* eslint-disable spaced-comment */
/*!
{
  "name": "ie8",
  "property": "ie8"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **ie8**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ie8
	 */
	Modernizr.addTest('ie8', (document.all && !document.addEventListener));
});
