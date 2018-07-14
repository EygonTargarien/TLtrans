'use strict';

/**
 * toggleBlock
 * @module
 */


// ----------------------------------------
// Imports
// ----------------------------------------



// ----------------------------------------
// Private
// ----------------------------------------

function closeAllModal(){
	let speed = toggleBlock.config.speed;

	let $btnList = $('[data-toggle-btn]'),
		$cntList = $('[data-toggle-cnt]');

	$btnList.removeClass('has-active');

	$cntList.each(function(i,el){
		$(el).removeClass('has-active').slideUp(speed);
		$(el).trigger('toggle.event.hide');
	});

	toggleBlock.isOpen = false;
}

// ----------------------------------------
// Public
// ----------------------------------------


const toggleBlock = {
	isOpen: false,
	config : {
		speed : 400
	},
	init ($context = $(document)) {
		let $this = this;

		$context.on('click', '[data-toggle-btn]', function (event) {
			event.preventDefault();
			let $button = $(this);
			let {speed} = $this.config;
			let nameSpace = $button.data('toggle-btn');

			if (!$button.hasClass('has-active')){
				$this.show(nameSpace);
			} else {
				$this.hide(nameSpace);
			}
		});

		$(document).on('click',(e) =>{
			if (this.isOpen) {
				const $target = $(e.target);

				if (!(
						$target.hasAttr('data-toggle-btn') ||
						$target.closest('[data-toggle-btn]').length ||
						$target.hasAttr('data-toggle-cnt') ||
						$target.closest('[data-toggle-cnt]').length
					)) {
					closeAllModal();
				}
			}
		});
	},

	show(nameSpace){
		let {speed} = this.config;
		let $btn = $(`[data-toggle-btn=${nameSpace}]`),
			$cnt = $(`[data-toggle-cnt=${nameSpace}]`),
			$btnList = $('[data-toggle-btn]'),
			$cntList = $('[data-toggle-cnt]');

		$btnList.removeClass('has-active');
		$cntList.removeClass('has-active').slideUp(speed);

		$cnt.trigger('toggle.event.show');

		closeAllModal();

		$btn.addClass('has-active');
		$cnt.slideDown(speed);

		this.isOpen = true;
	},

	hide(nameSpace){
		let {speed} = this.config;
		let $btn = $(`[data-toggle-btn=${nameSpace}]`),
			$cnt = $(`[data-toggle-cnt=${nameSpace}]`);

		$btn.removeClass('has-active');
		$cnt.removeClass('has-active').slideUp(speed);

		$cnt.trigger('toggle.event.hide');

		this.isOpen = false;
	}
};


// ----------------------------------------
// Exports
// ----------------------------------------

export default toggleBlock;
