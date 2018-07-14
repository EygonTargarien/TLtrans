/* eslint-disable spaced-comment */
/*!
{
  "name": "win",
  "property": "win"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name win
	 */
	Modernizr.addTest('win', (navigator.platform.toLowerCase().indexOf('win') >= 0));
});
