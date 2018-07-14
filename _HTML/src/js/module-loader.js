'use strict';

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import ModuleLoader from 'wezom-module-loader';

// ----------------------------------------
// Public
// ----------------------------------------

const moduleLoader = new ModuleLoader({
	debug: IS_DEVELOP,
	importPromise: moduleName => import('./_modules-loaders/' + moduleName),
	initSelector: '.js-init',
	initFunctionName: 'loaderInit',
	loadingClass: '_module-loading',
	loadedClass: '_module-loaded',
	list: {
		/* eslint-disable key-spacing */
		'jquery-validation--module-loader': 'form',
		'inputmask--module-loader':         '[data-phonemask]',
		's2s--module-loader':               '[data-s2s]',
		'magnific-popup--module-loader':    '[data-mfp]',
		'wrap-media--module-loader':        '[data-wrap-media]',
		'prismjs--module-loader':           '[data-prismjs]',
		'lozad--module-loader':             ['[data-lozad]', 'picture'],
		'google-map--module-loader':        '[data-google-map]',
		'scroll-window--module-loader':     '[data-scroll-window]',
		'draggable-table--module-loader':   '[data-draggable-table]',
		'accordion--module-loader':         '[data-accordion]',
		'ulogin-loader':         			'[data-ulogin-class]',
		'slider-loader':         			'[data-slider]',
		'toggle-height-loader':         	'[data-tgl-height]',
		'load-more-loader':                 '[data-more]',
		'timer-loader':                     '[data-timer]',
		'counter-loader':                   '[data-counter]',
		'calc-loader':                      '[data-calc]',
		'github-loader':                    '[data-github]'
	}
});

// ----------------------------------------
// Exports
// ----------------------------------------

export default moduleLoader;
