'use strict';

/**
 * Прослойка для загрузки модуля `lozad`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import lozadLoad from '#/_modules/lozad-load';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	lozadLoad($elements, moduleLoader);
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
