'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------


// ----------------------------------------
// Public
// ----------------------------------------

/**
 * Проверка тега на содержание атрибута
 */
$.fn.hasAttr = function(name) {
	return this.attr(name) !== undefined;
};

// ----------------------------------------
// Exports
// ----------------------------------------

//export default FUNCTION_TEMPLATE;
