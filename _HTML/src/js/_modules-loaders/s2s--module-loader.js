'use strict';

/**
 * Прослойка для загрузки модуля `s2s`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

// import s2s from '#/_modules/s2s/s2s-init';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	if (!window.Modernizr.mobiledevice) {
		import('#/_modules/s2s/s2s-init').then(module => module.default($elements, moduleLoader));
	}
	// s2s($elements, moduleLoader);
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
