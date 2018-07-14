'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.LabelError}
 * @private
 */
function wrapper (app) {
	const {El} = app.el;

	/**
	 * @memberOf app.el
	 * @param {string} elName
	 * @requires app.el.El
	 */
	class LabelError {
		constructor (elName) {
			return new El('label', {
				class: 'has-error',
				for: elName,
				id: elName + '-error',
				style: 'display: none;'
			});
		}
	};

	return LabelError;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
