'use strict';

import createTimer from '#/_modules/create-timer';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'flipclock';
import 'flipclock/dist/flipclock.css';

// ----------------------------------------
// Private
// ----------------------------------------

let defaultConfig = {
	mainClass: '.js-timer',
	bntClass: '.js-timerStart'
}

// ----------------------------------------
// Public
// ----------------------------------------
class Timer {

	constructor ($container, userConfig = {}) {
		let $this = this;
		if ($container.data('timer') instanceof Timer) {
			$container.data('timer', null);
		}
		this.$container = $container;
		this.config = $.extend(true, {}, Timer.config, userConfig);
		this.$timer = this.$container.closest(this.config.mainClass);

		this.clock = this.$container.FlipClock({
			clockFace: 'MinuteCounter',
			clockFaceOptions: {
				autoStart: false,
			},
			onStop: function() {
				console.log('timer off');
			}
		});
		this.clock.face.setCountdown(true);
		this.clock.setFaceValue(this.config.timer);



		this.$timer.on('click',this.config.bntClass, function(){
			$this.clock.start();
		});

		this.$container.data('timer', this);
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

export default Timer;
