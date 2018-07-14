/* eslint-disable spaced-comment */
/*!
{
  "name": "mac",
  "property": ["mac", "maclike"]
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **mac**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name mac
	 */
	Modernizr.addTest('mac', (/mac/i.test(window.navigator.platform)));

	/**
	 * Определение **maclike**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name maclike
	 */
	Modernizr.addTest('maclike', (window.navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) !== null));
});
