'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------
import defer from 'extend/defer';

// ----------------------------------------
// Private
// ----------------------------------------

let defaultConfig = {
	wrapClass: '.js-counter',
	plusClass: '.js-counterPlus',
	minusClass: '.js-counterMinus',
	areaClass: '.js-counterArea',
	timerToSend: 1000
};

let wrappers = {
	basketClass: '.js-basketItem',
	calcClass: '.js-calc'
};

function extendActions ($container, obj) {
	//basket
	if ($container.closest(wrappers.basketClass).length) {
		$container.trigger('actionSendBasket', obj);
	}

	//calc
	if ($container.closest(wrappers.calcClass).length) {

	}
}

// ----------------------------------------
// Public
// ----------------------------------------

class Counter {
	constructor ($container = $(defaultConfig.wrapClass), userConfig = {}) {
		if ($container.data('counter') instanceof Counter) {
			return $container.data('counter');
		}

		let $this = this;
		this.$container = $container;
		this.config = $.extend(true, {}, defaultConfig, userConfig);

		this.deferExtendActions = defer(extendActions, this.config.timerToSend);

		this.$plus = $container.find(this.config.plusClass);
		this.$minus = $container.find(this.config.minusClass);
		this.$area = $container.find(this.config.areaClass);

		this.$plus.on('click', () => this.plus());
		this.$minus.on('click', () => this.minus());
		this.$area.on('keyup', () => this.setCount());

		this.$area.on('focus', function () {
			$(this).select();
		}).on('focusout', function () {
			let value = $(this).val(),
				max = +$(this).attr('data-max') || Infinity;

			if (value > max) {
				$(this).val(max);
			}
			if (value < 1) {
				$(this).val(1);
			}
		}).on('change keyup input click', function () {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});

		this.$container.data('counter', this);
	}

	setCount () {
		let {$area} = this;
		let value = $area.val(),
			max = +$area.attr('data-max') || Infinity;
		if (value > (max)) {
			$area.val(max);
			value = max;
		} else if (value < 1) {
			$area.val(value);
			value = 1;
		}


		this.deferExtendActions(this.$container, {
			count: value
		});
	}

	plus () {
		let {$area} = this;
		let value = $area.val(),
			max = +$area.attr('data-max') || Infinity;

		if (value < (max)) {
			$area.val(++value);
		}

		this.deferExtendActions(this.$container, {
			count: value
		});
	}

	minus () {
		let {$area} = this;
		let value = $area.val();

		if (value > 1) {
			$area.val(--value);
		}

		this.deferExtendActions(this.$container, {
			count: value
		});
	}

	static get config () {
		return defaultConfig;
	}

	static set config (value) {
		$.extend(true, defaultConfig, value);
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default Counter;
