'use strict';

/**
 * Прослойка для загрузки модуля `wrap-media`
 * @module
 */

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	const $media = $elements.find('iframe, video');
	if ($media.length) {
		import(/* webpackChunkName: "wrap-media" */'#/_modules/wrap-media').then(module => module.default($media));
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
