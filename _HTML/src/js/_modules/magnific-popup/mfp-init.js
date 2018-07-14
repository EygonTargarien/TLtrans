'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'custom-jquery-methods/fn/has-inited-key';
import 'magnific-popup';
import './mfp-extend';
import './mfp-extend.scss';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function mfpAjax ($elements, moduleLoader) {
	$elements.each((i, el) => {
		const $element = $(el);
		if ($element.hasInitedKey('mfpAjax-inited')) {
			return true;
		}

		const config = $.extend(true, {
			type: 'ajax',
			mainClass: 'mfp-animate-zoom-in',
			removalDelay: 300,
			callbacks: {
				elementParse (item) {
					const {
						url,
						type = 'POST',
						param: data = {}
					} = item.el.data();
					this.st.ajax.settings = {url, type, data};
				},
				ajaxContentAdded () {
					let $container = this.contentContainer || [];
					if ($container) {
						moduleLoader.init($container);
					}
				}
			}
		}, {
			// current element custom config
		});

		$element.magnificPopup(config);
	});
}

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function mfpIframe ($elements, moduleLoader) {
	$elements.each((i, el) => {
		const $element = $(el);
		if ($element.hasInitedKey('mfpIframe-inited')) {
			return true;
		}

		const config = $.extend(true, {
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-animate-zoom-in',
			closeBtnInside: true
		}, {
			// current element custom config
		});

		$element.magnificPopup(config);
	});
}

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function mfpInline ($elements, moduleLoader) {
	$elements.each((i, el) => {
		const $element = $(el);
		if ($element.hasInitedKey('mfpInline-inited')) {
			return true;
		}

		const config = $.extend(true, {
			type: 'inline',
			removalDelay: 300,
			mainClass: 'mfp-animate-zoom-in',
			closeBtnInside: true
		}, {
			// current element custom config
		});

		$element.magnificPopup(config);
	});
}

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function mfpGallery ($elements, moduleLoader) {
	$elements.each((i, el) => {
		let $element = $(el);
		if ($element.hasInitedKey('mfpGallery-inited')) {
			return true;
		}

		const config = $.extend(true, {
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-animate-zoom-in',
			delegate: '[data-mfp-src]',
			closeBtnInside: true,
			gallery: {
				enabled: true,
				preload: [0, 2],
				navigateByImgClick: true,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
			},
			callbacks: {
				elementParse (item) {
					if (/youtube|vimeo|maps\.google/.test(item.src)) {
						item.type = 'iframe';
					}
				}
			}
		}, {
			// current element custom config
		});

		$element.magnificPopup(config);
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {mfpAjax, mfpIframe, mfpInline, mfpGallery};
