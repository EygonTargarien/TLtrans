/* eslint-disable spaced-comment */
/*!
{
  "name": "winvista",
  "property": "winvista"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows Vista**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name winvista
	 */
	Modernizr.addTest('winvista', (/windows nt 6\.0/i.test(window.navigator.userAgent)));
});
