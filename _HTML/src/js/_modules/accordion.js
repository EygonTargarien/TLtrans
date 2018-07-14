'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'custom-jquery-methods/fn/has-inited-key';
import wsTabs from '#/_modules/wstabs';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function accordion ($elements, moduleLoader) {
	const {
		on: tabOn,
		off: tabOff,
		again: tabAgain
	} = wsTabs.events;
	const wsTabButton = `[data-${wsTabs.keys.button}]`;

	$elements.each((i, el) => {
		const $el = $(el);
		if ($el.hasInitedKey('accordionInited')) {
			return true;
		}

		const {
			type = 'single',
			openClass = 'is-open',
			slideTime = 300
		} = ($el.data('accordion') || {});
		const $buttons = $el.find(wsTabButton);

		/**
		 * @param {JQuery.Event} event
		 * @private
		 */
		function toggle (event) {
			const $button = $(this);
			const $block = $button.data(wsTabs.keys.myBlock);

			if ($block !== undefined && $block.length) {
				const {slideAction} = event.data;
				$block.stop()[slideAction](slideTime, () => {
					const doClass = $block.is(':visible') ? 'addClass' : 'removeClass';
					$button.add($block)[doClass](openClass);
				});
			}
		}

		if (type === 'single') {
			$buttons.on(tabOn, {slideAction: 'slideDown'}, toggle);
			$buttons.on(tabAgain, {slideAction: 'slideToggle'}, toggle);
			$buttons.on(tabOff, {slideAction: 'slideUp'}, toggle);
		} else {
			$buttons.on(tabOn, {slideAction: 'slideToggle'}, toggle);
			$buttons.on(tabAgain, {slideAction: 'slideToggle'}, toggle);
		}
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default accordion;
