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
const preset ={
	default:{
		direction: 'horizontal',
		speed: 400,
		loop: true,
		initialSlide: 0,
		autoHeight: false,
		effect: 'slide',
		watchOverflow: false,
		centeredSlides: false,
		freeMode: false,
		grabCursor: true,

		slidesPerView: 3,
		spaceBetween: 50,

		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},

		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
			clickable: true,
			// type: 'progressbar',
			// type: 'fraction',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true
		},
	},
	review:{
		loop: true,
		slidesPerView: 1,
		speed: 800,
		autoplay: {
			delay: 3500,
			disableOnInteraction: true,
		},
		spaceBetween: 30,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		}
	},
		reviewSm:{
			loop: true,
			slidesPerView: 1,
			speed: 800,
			autoplay: {
				delay: 4500,
				disableOnInteraction: true,
			},
			spaceBetween: 30,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		}

};
// ----------------------------------------
// Exports
// ----------------------------------------

export default preset;
