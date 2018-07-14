'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.FormCheck}
 * @private
 */
function wrapper (app) {
	const {El} = app.el;

	/**
	 * @memberOf app.el
	 * @param {Object} [props={}] - свойства элемента
	 * @param {Function} [done] - коллбек создания
	 * @requires app.el.El
	 */
	class FormCheck {
		constructor (props = {}, done) {
			const checkProps = El.mergeProps({
				type: 'checkbox',
				required: true
			}, props);

			const $span = new El('span', {
				innerHTML: checkProps.innerHTML
			});
			delete checkProps.innerHTML;

			const $input = new El('input', checkProps);
			const $label = new El('label', {
				class: 'form-check',
				innerHTML: [$input, $span].join('\n')
			}, done);
			return $label;
		}
	};

	return FormCheck;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
