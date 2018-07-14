'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

// ----------------------------------------
// Private
// ----------------------------------------

// ----------------------------------------
// Public
// ----------------------------------------
function addItems(obj, templateType) {
	let arr = [];

	obj.forEach(function (el, i) {

		let item = templateType(el);
		arr.push(item);
	});
	return arr;
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default addItems;
