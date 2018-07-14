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


function defer(f, ms = 300) {
	let timerId;
	return function() {
		clearTimeout(timerId);
		timerId = setTimeout(() => f.apply(this, arguments), ms)
	}
}




// ----------------------------------------
// Exports
// ----------------------------------------

export default defer;