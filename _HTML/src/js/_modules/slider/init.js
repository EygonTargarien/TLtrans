'use strict';

/**
 * template slider
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import Swiper from 'swiper';
import presetObj from './presets';

// ----------------------------------------
// Private
// ----------------------------------------


// ----------------------------------------
// Public
// ----------------------------------------

const slider = {
	defaultConfig : {
		sliderClass : '[data-slider]'
	},

	init($sliderList = $(this.defaultConfig.sliderClass),userConfig = {}){
		let $this = this;
		this.config = $.extend(this.defaultConfig, userConfig);

		$sliderList.each(function(i,el){
			let $slider = $(el),
				$sliderContainer = $slider.closest('.js-sliderContainer'),
				preset = $slider.data('slider') || 'default';
			let userConfig ={};

			let navigationElement = {
				pagination: {
					el : $sliderContainer.find('.js-sliderPagination'),
				},
				navigation: {
					nextEl: $sliderContainer.find('.js-sliderNext'),
					prevEl: $sliderContainer.find('.js-sliderPrev')
				},

				scrollbar: {
					el: $sliderContainer.find('.js-sliderScrollBar')
				}
			};



			if ($slider.data('swiper')) {
				return true;
			}

			let config = $.extend(true, [],presetObj.default, presetObj[preset],navigationElement, userConfig);

			let swiper = new Swiper($slider, config);


			switch (preset) {
				case 'main':
					console.log('action');
					break;
			}

			$slider.data('swiper', swiper);
		});

	}
};

// ----------------------------------------
// Exports
// ----------------------------------------

export default slider;
