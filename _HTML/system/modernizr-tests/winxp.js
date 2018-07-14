/* eslint-disable spaced-comment */
/*!
{
  "name": "winxp",
  "property": "winxp"
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение операционной системы **Windows XP**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name winxp
	 */
	Modernizr.addTest('winxp', (/windows nt 5\.1/i.test(window.navigator.userAgent)));
});
