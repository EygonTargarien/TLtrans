'use strict';

/**
 * Прослойка для загрузки модуля `draggable-table`
 * @module
 */

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 */
function loaderInit ($elements, moduleLoader) {
	const $tables = $elements.find('table').not('table table');
	if ($tables.length) {
		import(/* webpackChunkName: "draggable-table" */'#/_modules/draggable-table').then(module => module.default($tables, moduleLoader));
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
