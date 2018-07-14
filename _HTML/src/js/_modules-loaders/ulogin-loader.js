'use strict';

/**
 * Прослойка для загрузки модуля `lozad`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import ulogin from '#/_modules/ulogin';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
    ulogin($elements);
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
