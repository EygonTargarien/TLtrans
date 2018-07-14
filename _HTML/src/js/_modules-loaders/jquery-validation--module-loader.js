'use strict';

/**
 * Прослойка для загрузки модуля `jquery-validation`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import validate from '#/_modules/jquery-validation/validate-init';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {

	validate($elements, moduleLoader);
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
