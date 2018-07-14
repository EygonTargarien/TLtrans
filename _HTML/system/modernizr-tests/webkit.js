/* eslint-disable spaced-comment */
/*!
{
  "name": "webkit",
  "property": "webkit"
}
!*/

define(['Modernizr', 'docElement'], function (Modernizr, docElement) { // eslint-disable-line no-undef
	/**
	 * Определение **webkit** браузеров
	 * @type {boolean}
	 * @memberOf modernizrTests
	 * @name webkit
	 */
	Modernizr.addTest(
		'webkit',
		function () {
			var webkit = 'WebkitAppearance' in docElement.style;
			var edge = / edge\//i.test(window.navigator.userAgent);
			return webkit && edge;
		}
	);
});
