'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import loadMore from '#/_modules/loadMore';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 */
function loaderInit ($elements, moduleLoader) {
	loadMore.init();
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
