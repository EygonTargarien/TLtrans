/* eslint-disable spaced-comment */
/*!
{
  "name": "ie11",
  "property": "ie11"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение браузера **ie11**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name ie11
	 */
	Modernizr.addTest('ie11', (!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)));
});
