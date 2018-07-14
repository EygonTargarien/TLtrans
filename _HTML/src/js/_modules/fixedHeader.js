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
const fixedHeader = {
	defaultClass : {
		mainClass: '.js-fixHeader',
		wrapClass: '.js-fixHeaderWrap',
		cloneClass: '.js-fixClone',
	},
	init($container = $(this.defaultClass.mainClass), userConfig){
		this.$container = $container;
		this.config = $.extend(this.defaultClass, userConfig);
		let $this = this;
		this.height = $(this.config.mainClass).outerHeight();

		$(this.config.wrapClass).css('min-height', this.height + 'px');
		$(document)
			.on('scroll',() =>{
				let scrollTop = $(window).scrollTop();

				if(scrollTop > this.height){
					$this.setFixHeader();
				}
				if(scrollTop == 0){
					$this.destroyFixHeader();
				}
			})
	},

	setFixHeader(){
		let {mainClass}  = this.config;
		$(mainClass).addClass('has-fixed');
	},

	destroyFixHeader(){
		let {mainClass}  = this.config;
		$(mainClass).removeClass('has-fixed');
	}

};
// ----------------------------------------
// Exports
// ----------------------------------------

export default fixedHeader;
