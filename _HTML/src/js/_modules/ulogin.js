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

function ulogin($elements){
    $elements.on('click',function(e){
        let $target = $($(this).data('ulogin-class'));
        console.log($target)

        $target.trigger('click');
        return false;
	})
}



// ----------------------------------------
// Exports
// ----------------------------------------

export default ulogin;
