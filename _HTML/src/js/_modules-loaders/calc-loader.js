'use strict';

/**
 * Прослойка для загрузки модуля `lozad`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import calc from '#/_modules/calc';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($element, moduleLoader) {
	calc.init($element,$element.data('calc'));
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
