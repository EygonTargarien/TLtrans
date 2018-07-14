'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.FormInput}
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
	class FormInput {
		constructor (props = {}, done) {
			const $element = new El('input', El.mergeProps({
				class: 'form-group__input',
				type: 'text',
				required: true
			}, props), done);
			return $element;
		}

		static get PhoneMask () {
			return new Proxy(FormInput, {
				construct (Target, args) {
					const [props = {}, done] = args;
					const phoneMaskProps = El.mergeProps({
						type: 'tel',
						class: 'js-init',
						dataPhonemask: 'universal',
						dataRuleMinlength: 3,
						dataRuleValiddata: true,
						dataMsgValiddata: 'Укажите полный номер телефона'
					}, props);

					return new Target(phoneMaskProps, done);
				}
			});
		}
	};

	return FormInput;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
