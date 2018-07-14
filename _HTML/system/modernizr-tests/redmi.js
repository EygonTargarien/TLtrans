/* eslint-disable spaced-comment */
/*!
{
  "name": "redmi",
  "property": ["redmi", "redminote"]
}
!*/

define(['Modernizr'], function (Modernizr) { // eslint-disable-line no-undef
	/**
	 * Определение **Redmi**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name redmi
	*/
	Modernizr.addTest('redmi', (/Android\s.*Redmi\s/i.test(window.navigator.userAgent)));

	/**
	 * Определение **Redmi Note**
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name redminote
	*/
	Modernizr.addTest('redminote', (/Android\s.*Redmi.*\sNote\s/i.test(window.navigator.userAgent)));
});
