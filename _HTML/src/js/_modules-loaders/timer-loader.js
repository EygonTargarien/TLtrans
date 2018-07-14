'use strict';



/**


 // ----------------------------------------
 // Imports
 // ----------------------------------------
**/


import Timer from '#/_modules/Timer';

 // ----------------------------------------
 // Public
 // ----------------------------------------

 /**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function loaderInit ($elements, moduleLoader) {
	$elements.each(function(i,el){
		new Timer($(el),$(el).data('timer'));
	})

}

// ----------------------------------------
// Exports
// ----------------------------------------

export {loaderInit};
