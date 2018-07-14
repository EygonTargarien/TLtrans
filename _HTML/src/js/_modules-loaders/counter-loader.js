'use strict';



/**


 // ----------------------------------------
 // Imports
 // ----------------------------------------
 **/


import Counter from '#/_modules/Counter';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	console.log($elements);
	$elements.each(function(i,el){
		new Counter($(el),$(el).data('counter'));
	})

}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
