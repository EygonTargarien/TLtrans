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
let button = `
	<button data-tgl-more><span>Show more</span></button>
`;
// ----------------------------------------
// Public
// ----------------------------------------
function tglHeight($elements){
	$elements.each(function(i,el){
		let $block = $(el),
			$cnt = $block.find('[data-tglCnt]');
		let blockHeight = $block.height(),
			cntHeight = $cnt.height();

		if(cntHeight > blockHeight) {
			$block.append(button);
		}


		$block.on('click','[data-tgl-more]',function(){
			$(this).hide(300);
			$block.css('height',`${cntHeight}px`);
		})
	});
}
// ----------------------------------------
// Exports
// ----------------------------------------

export default tglHeight;
