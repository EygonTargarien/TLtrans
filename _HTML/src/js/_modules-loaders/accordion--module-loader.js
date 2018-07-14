'use strict';

/**
 * Прослойка для загрузки модуля `accordion`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import accordion from '#/_modules/accordion';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	accordion($elements, moduleLoader);
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
