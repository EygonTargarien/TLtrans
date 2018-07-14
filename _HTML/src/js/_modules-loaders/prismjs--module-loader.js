'use strict';

/**
 * Прослойка для загрузки модуля `prism`
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
	const $code = $elements.find('code[class*="lang"]');
	if ($code.length) {
		import(/* webpackChunkName: "prismjs" */'#/_modules/prismjs/prism').then(module => module.default($code));
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
