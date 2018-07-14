'use strict';

/**
 * Скролл window
 * @see {@link https://greensock.com/docs/Plugins/ScrollToPlugin}
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import GSAP from '#/_vendors/gsap/gsap';
import TweenLite from '#/_vendors/gsap/TweenLite';
import '#/_vendors/gsap/plugins/ScrollToPlugin';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * Длительность скролла, в секундах
 * @type {number}
 * @private
 */
const defaultDuration = 1;

/**
 * @type {JQuery}
 * @private
 */
const $window = $(window);

/**
 * @type {number}
 * @private
 */
const showHeight = 500;

/**
 * @type {string}
 * @private
 */
const showClass = 'scroll-up--show';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function scrollWindow ($elements, moduleLoader) {
	$elements.on('click', function () {
		let $this = $(this);
		let scroll = $this.data('scroll-window') || 0;
		let duration = defaultDuration;

		if (scroll === 'up') {
			let x = $window.scrollTop();
			let y = $window.outerHeight() * 2;
			let s = parseFloat((x / y).toFixed(2));
			scroll = 0;
			if (s < defaultDuration) {
				duration = s;
			}
		} else if (scroll === 'down') {
			scroll = 'max';
		}

		TweenLite.to(window, duration, {
			scrollTo: scroll,
			ease: GSAP.Power2.easeOut,
			onComplete () {
				// console.log('complete');
			}
		});
	});

	const $scrollUp = $elements.filter('[data-scroll-window="up"]');
	if ($scrollUp.length) {
		const onScroll = () => {
			let scroll = $window.scrollTop();
			let doClass = scroll > showHeight ? 'addClass' : 'removeClass';
			$scrollUp[doClass](showClass);
		};

		$window.on('scroll', onScroll);
		onScroll();
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default scrollWindow;
