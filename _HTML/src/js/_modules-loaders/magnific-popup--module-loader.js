'use strict';

/**
 * Прослойка для загрузки модулей `magnific-popup`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import {mfpAjax, mfpIframe, mfpInline, mfpGallery} from '#/_modules/magnific-popup/mfp-init';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	const $ajax = $elements.filter('[data-mfp="ajax"]');
	const $iframe = $elements.filter('[data-mfp="iframe"]');
	const $inline = $elements.filter('[data-mfp="inline"]');
	const $gallery = $elements.filter('[data-mfp="gallery"]');

	if ($ajax.length) {
		mfpAjax($ajax, moduleLoader);
	}

	if ($iframe.length) {
		mfpIframe($iframe, moduleLoader);
	}

	if ($inline.length) {
		mfpInline($inline, moduleLoader);
	}

	if ($gallery.length) {
		mfpGallery($gallery, moduleLoader);
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
