'use strict';

import git from '#/_modules/git';

/**


 // ----------------------------------------
 // Imports
 // ----------------------------------------

 import slider from '#/_modules/slider/index.js';

 // ----------------------------------------
 // Public
 // ----------------------------------------

 /**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	git.init($elements, $('[data-github]').data('github'));
}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
