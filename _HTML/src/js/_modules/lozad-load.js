'use strict';

/**
 * Lazy load изображений на оснве модуля `lozad`
 * @see {@link https://github.com/ApoorvSaxena/lozad.js}
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import lozad from 'lozad';
import 'custom-jquery-methods/fn/node-name';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * Коллбек вставки источника
 * @param {JQuery} $el
 * @private
 * @sourceCode
 */
function onLoad ($el) {
	let $parent = $el.parent('.lozad-parent');
	let delay = $el.data('lozad-delay') || 50;
	setTimeout(() => {
		if ($parent.length) {
			$parent.addClass('lozad-parent--is-ready');
		}
		$el.addClass('lozad--is-ready');
	}, delay);
}

/**
 * @param {Element} element
 * @private
 * @sourceCode
 */
function load (element) {
	const $element = $(element);
	const nodeName = $element.nodeName();
	const img = document.createElement('img');

	if (nodeName === 'picture') {
		let $img = $(img);
		$img.on('load', () => onLoad($element));
		$element.append($img);
	} else {
		/** @type {string} */
		const src = $element.data('lozad');
		img.onload = () => {
			if ($element.nodeName() === 'img') {
				$element.attr('src', src);
			} else {
				$element.css('background-image', `url(${src})`);
			}
			onLoad($element);
		};
		img.src = src;
	}
}

/**
 * @param {JQuery} $elements
 * @private
 * @sourceCode
 */
function init ($elements) {
	$elements.each((i, el) => {
		const $el = $(el);
		const lozadObserver = $el.data('lozadObserver') || lozad(el, {
			load,
			rootMargin: '0px',
			threshold: 0
		});

		$el.data('lozadObserver', lozadObserver);
		lozadObserver.observe();
	});
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function lozadLoad ($elements, moduleLoader) {
	if (window.Modernizr && window.Modernizr.intersectionobserver) {
		init($elements);
	} else {
		import(/* webpackChunkName: "intersection-observer" */'intersection-observer').then(() => {
			init($elements);
		});
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default lozadLoad;
