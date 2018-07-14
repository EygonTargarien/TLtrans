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
function checkResponceWidth(responceWidth = 1024){
	if ($(window) > responceWidth)  return false;
	return true;
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default checkResponceWidth;
