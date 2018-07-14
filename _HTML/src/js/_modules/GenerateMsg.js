'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

 // import Noty from 'noty/lib/noty';
 import Noty from 'noty';
//
import "noty/lib/noty.css";
import "noty/lib/themes/metroui.css";

// ----------------------------------------
// Private
// ----------------------------------------

let defaultConfig = {
	type: 'warning',
	theme: 'metroui',
	layout: 'bottomRight',
	timeout: 3500
};

// ----------------------------------------
// Public
// ----------------------------------------

class GenerateMsg {
	constructor (notification, userConfig = {}) {

		this.config = $.extend(true, {}, defaultConfig, userConfig);

		this.config.text = notification;

		this.noty = new Noty(this.config);
	}

	show () {
		this.noty.show();
	}

	hide () {
		this.noty.close();

	}

	setTypeMsg (type) {
		this.config.type = type;
		this.noty = new Noty(this.config);
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default GenerateMsg;
