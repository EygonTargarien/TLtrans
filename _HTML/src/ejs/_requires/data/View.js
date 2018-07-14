'use strict';

// ----------------------------------------
// Imports
// ----------------------------------------

const lodash = require('lodash');

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @memberOf app.data
 * @param {string} [view] - имя вьюхи
 * @param {Object} [data={}] - данные
 */
class View {
	constructor (view, data = {}) {
		this.name = view;
		lodash.merge(this, data);

		this.href = this.href || this.name + '.html';
		this.title = this.title || `Untitled ${this.name}`;
		this.headTitle = this.headTitle || this.title;
		this.criticalCSS = Array.isArray(this.criticalCSS) ? this.criticalCSS : [];
		this.criticalJS = Array.isArray(this.criticalJS) ? this.criticalJS : [];
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = View;
