'use strict';

/**
 * Модуль для обертки таблиц и создание драгга при адаптации
 * @see {@link https://greensock.com/docs/Utilities/Draggable}
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'custom-jquery-methods/fn/has-inited-key';
import '#/_vendors/gsap/plugins/CSSPlugin';
import Draggable from '#/_vendors/gsap/utils/Draggable';
import createTimer from '#/_modules/create-timer';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @type {Object}
 * @private
 */
const classes = {
	wrapper: 'draggable-table',
	get left () {
		return this.wrapper + '--left';
	},
	get right () {
		return this.wrapper + '--right';
	},
	get holder () {
		return this.wrapper + '__holder';
	},
	get table () {
		return this.wrapper + '__table';
	}
};

/**
 * @param {JQuery} $table
 * @return {Object}
 * @private
 */
function wrapTable ($table) {
	$table.addClass(classes.table).wrap(`
		<div class="${classes.wrapper}">
			<div class="${classes.holder}"></div>
		</div>
	`);

	const $holder = $table.parent();
	const $wrapper = $holder.parent();
	return {$holder, $wrapper};
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $tables
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function draggableTable ($tables, moduleLoader) {
	const $window = $(window);

	$tables.each((i, table) => {
		const $table = $(table);
		if ($table.hasInitedKey('draggableTableInited')) {
			return true;
		}

		const timer = createTimer(300);
		const {$holder, $wrapper} = wrapTable($table);

		/**
		 * @param {Draggable} draggable
		 * @private
		 */
		const checkout = (draggable) => {
			const isEnd = draggable.x <= draggable.minX + 5;
			const isStart = draggable.x >= -5;
			$wrapper[isEnd ? 'removeClass' : 'addClass'](classes.right);
			$wrapper[isStart ? 'removeClass' : 'addClass'](classes.left);

			if (isStart && isEnd) {
				draggable.disable();
			}
		};

		/**
		 * @type {Array<Draggable>}
		 * @private
		 */
		const draggables = Draggable.create($holder, {
			type: 'scroll',
			edgeResistance: 1,
			dragClickables: true,
			allowNativeTouchScrolling: true,
			allowEventDefault: true,
			allowContextMenu: true,
			throwProps: true,
			onDrag () {
				checkout(this);
			}
		});

		const checkoutAll = () => {
			draggables.forEach(draggable => {
				draggable.enable();
				draggable.update(true);
				checkout(draggable);
			});
		};

		$window.on('resize', () => {
			timer(checkoutAll);
		});
		checkoutAll();
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default draggableTable;
