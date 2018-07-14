'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.FormTextarea}
 * @private
 */
function wrapper (app) {
	const {El} = app.el;

	/**
	 * @classDesc Обертка создания текстового input'a
	 * @memberOf app.el
	 * @param {Object} [props={}] - свойства элемента
	 * @param {Function} [done] - коллбек создания
	 * @requires app.el.El
	 */
	class FormTextarea {
		constructor (props = {}, done) {
			const $element = new El('textarea', El.mergeProps({
				class: 'form-group__textarea',
				required: true
			}, props), done);
			return $element;
		}
	};

	return FormTextarea;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
