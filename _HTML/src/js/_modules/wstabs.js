'use strict';

/**
 * Wezom Standard Tabs
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'custom-jquery-methods/fn/get-my-elements';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * Не реагировать на клик
 * @param {JQuery} $button
 * @return {boolean|undefined}
 * @private
 */
function noReact ($button) {
	return $button.hasClass(wsTabs.cssClass.active) || $button.hasClass(wsTabs.cssClass.disabled) || $button.prop('disabled');
}

/**
 * @param {JQuery} $button
 * @param {JQuery} $context
 * @private
 */
function changeTab ($button, $context) {
	let myNs = $button.data(wsTabs.keys.ns);
	let myName = $button.data(wsTabs.keys.button);

	let buttonsSelector = `[data-${wsTabs.keys.ns}="${myNs}"][data-${wsTabs.keys.button}]`;
	let buttonSyncSelector = `[data-${wsTabs.keys.ns}="${myNs}"][data-${wsTabs.keys.button}="${myName}"]`;
	let blocksSelector = `[data-${wsTabs.keys.ns}="${myNs}"][data-${wsTabs.keys.block}]`;
	let blockSelector = `[data-${wsTabs.keys.ns}="${myNs}"][data-${wsTabs.keys.block}="${myName}"]`;

	/**
	 * @type {JQuery}
	 */
	let $block = $button.getMyElements(wsTabs.keys.myBlock, blockSelector);
	if (noReact($button)) {
		$button.add($block).trigger(wsTabs.events.again);
		return false;
	}

	/**
	 * @type {JQuery}
	 */
	let $siblingBlocks = $block.getMyElements(wsTabs.keys.myBlocks, blocksSelector, $context, true);

	/**
	 * @type {JQuery}
	 */
	let $siblingButtons = $button.getMyElements(wsTabs.keys.myButtons, buttonsSelector, $context, true);
	let $syncButtons = $siblingButtons.filter(buttonSyncSelector);
	if ($syncButtons.length) {
		$siblingButtons = $siblingButtons.not($syncButtons);
	}

	$siblingButtons.add($siblingBlocks).removeClass(wsTabs.cssClass.active).trigger(wsTabs.events.off);
	$button.add($syncButtons).add($block).addClass(wsTabs.cssClass.active).trigger(wsTabs.events.on);
}

/**
 * Активация табов, если нету активных
 * @param {JQuery} $buttons
 * @param {JQuery} $context
 * @private
 */
function setActiveIfNotHave ($buttons, $context) {
	let ns = $buttons.data(wsTabs.keys.ns);
	let selector = `[data-${wsTabs.keys.ns}="${ns}"]`;
	let $group = $buttons.filter(selector);

	if ($group.length) {
		let $active = $group.filter(`.${wsTabs.cssClass.active}`);
		if (!$active.length) {
			changeTab($group.eq(0), $context);
		}

		if ($group.length < $buttons.length) {
			setActiveIfNotHave($buttons.not(selector), $context);
		}
	}
}

/**
 * Сброс зависимолстей
 * @param {JQuery} $list
 * @param {Array.<string>} keys
 * @private
 */
function dropDependencies ($list, keys) {
	$list.each((i, el) => {
		let $item = $(el);
		wsTabs.keys.forEach(key => {
			$item.data(key, null);
		});
	});
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @namespace
 */
const wsTabs = {
	/**
	 * События
	 * @enum {string}
	 * @sourceCode
	 */
	events: {
		on: 'wstabs-on',
		off: 'wstabs-off',
		again: 'wstabs-again'
	},

	/**
	 * CSS классы
	 * @enum {string}
	 * @sourceCode
	 */
	cssClass: {
		active: 'is-active',
		disabled: 'is-disabled'
	},

	/**
	 * Ключи
	 * @enum {string}
	 * @sourceCode
	 */
	keys: {
		ns: 'wstabs-ns',
		button: 'wstabs-button',
		block: 'wstabs-block',
		myBlock: '$myWsTabsBlock',
		myBlocks: '$myWsTabsBlocks',
		myButtons: '$myWsTabsButtons'
	},

	/**
	 * Инициализация
	 * @param {JQuery} [$context=$(document)]
	 * @sourceCode
	 */
	init ($context = $(document)) {
		$context.on('click', `[data-${wsTabs.keys.button}]`, {$context}, function (event) {
			event.preventDefault();
			changeTab($(this), $context);
		});
	},

	/**
	 * Принудительная активация табов, если нету активных
	 * @param {JQuery} [$context=$(document)]
	 * @sourceCode
	 */
	setActive ($context = $(document)) {
		let $buttons = $context.find(`[data-${wsTabs.keys.button}]`);
		setActiveIfNotHave($buttons, $context);
	},

	/**
	 * Сброс всех связей.
	 * Актуально при динамическом добавление новый кнопок и блоков в уже существующие группы табов
	 * @param {JQuery} [$context=$(document)]
	 * @sourceCode
	 */
	dropDependencies ($context = $(document)) {
		let $buttons = $context.find(`[data-${wsTabs.keys.button}]`);
		let $blocks = $context.find(`[data-${wsTabs.keys.block}]`);
		dropDependencies($buttons, [wsTabs.keys.myBlock, wsTabs.keys.myButtons]);
		dropDependencies($blocks, [wsTabs.keys.myBlocks]);
	}
};

// ----------------------------------------
// Exports
// ----------------------------------------

export default wsTabs;
