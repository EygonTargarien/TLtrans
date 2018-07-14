'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.FormSelect}
 * @private
 */
function wrapper (app) {
	const {El} = app.el;

	/**
	 * @classDesc Обертка создания select'a
	 * @memberOf app.el
	 * @param {Object} [props={}] - свойства элемента
	 * @param {Function} [done] - коллбек создания
	 * @requires app.el.El
	 */
	class FormSelect {
		constructor (props = {}, done) {
			const $element = new El('select', El.mergeProps({
				class: 'form-group__select',
				required: true
			}, props), done);
			return $element;
		}

		static get Option () {
			return new Proxy(El, {
				construct (Target, args) {
					return new Target('option', ...args);
				}
			});
		}
	};

	return FormSelect;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
