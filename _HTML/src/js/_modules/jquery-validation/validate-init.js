'use strict';

/**
 * Инит валидации форм
 * @module
 */

// ----------------------------------------
// Imports
// -----------  -----------------------------

import 'jquery-validation';
import 'custom-jquery-methods/fn/node-name';
import 'custom-jquery-methods/fn/has-inited-key';
import './extend/validate-extend';
import validateHandlers from './validate-handlers';
import validateGetResponse from './validate-get-response';
import Preloader from '#/_modules/Preloader';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @const {Object}
 * @private
 * @sourceCode
 */
const configDefault = {
	ignore: ':hidden, .js-ignore',
	get classes () {
		return {
			error: 'has-error',
			valid: 'is-valid',
			labelError: 'label-error',
			formError: 'form--error',
			formValid: 'form--valid',
			formPending: 'form--pending'
		};
	},
	get errorClass () {
		return this.classes.error;
	},
	get validClass () {
		return this.classes.error;
	},

	/**
	 * Валидировать элементы при потере фокуса.
	 * Или false или функция
	 * @type {Boolean|Function}
	 * @prop {HTMLElement} element
	 * @prop {Event} event
	 * @see {@link https://jqueryvalidation.org/validate/#onfocusout}
	 */
	onfocusout (element) {
		if (element.value.length || element.classList.contains(this.settings.classes.error)) {
			this.element(element);
		}
	},

	/**
	 * Валидировать элементы при keyup.
	 * Или false или функция
	 * @type {Boolean|Function}
	 * @prop {HTMLElement} element
	 * @prop {Event} event
	 * @see {@link https://jqueryvalidation.org/validate/#onkeyup}
	 */
	onkeyup (element) {
		if (element.classList.contains(this.settings.classes.error)) {
			this.element(element);
		}
	},

	/**
	 * Подсветка элементов с ошибками
	 * @param {HTMLElement} element
	 */
	highlight (element) {
		element.classList.remove(this.settings.classes.valid);
		element.classList.add(this.settings.classes.error);
	},

	/**
	 * Удаление подсветки элементов с ошибками
	 * @param {HTMLElement} element
	 */
	unhighlight (element) {
		element.classList.remove(this.settings.classes.error);
		element.classList.add(this.settings.classes.valid);
	},

	/**
	 * Обработчик сабмита формы
	 * @param {HTMLFormElement} form
	 * @returns {boolean}
	 */
	submitHandler (form) {
		try {
			/**
			 * @type {JQuery}
			 */
			let $form = $(form);
			let actionUrl = $form.data('ajax');
			if (typeof (actionUrl) !== 'string') {
				window.alert([
					'Error!',
					'--------------------',
					'ajax обработчик не указан'
				].join('\n'));
				return;
			}

			let preloader = new Preloader($form);
			preloader.show();

			let formData = new window.FormData();
			formData.append('xhr-lang', $('html').attr('lang') || 'ru');

			// игнорируемые типы инпутов
			let ignoredInputsType = [
				'submit',
				'reset',
				'button',
				'image'
			];

			$form.find('input, textarea, select').each((i, element) => {
				let {value, type} = element;
				if (~ignoredInputsType.indexOf(type)) {
					return true;
				}

				let $element = $(element);
				let elementNode = $element.nodeName();
				let elementName = $element.attr('name') || $element.data('name') || null;

				if (elementName === null) {
					return true;
				}

				switch (elementNode) {
					case 'input':
						if (type === 'file' && element.files && element.files.length) {
							for (let i = 0; i < element.files.length; i++) {
								let file = element.files[i];
								formData.append(elementName, file);
							}
						} else {
							if ((type === 'checkbox' || type === 'radio') && !element.checked) {
								break;
							}
							formData.append(elementName, value);
						}
						break;

					case 'textarea':
						formData.append(elementName, value);
						break;

					case 'select':
						let multiName = /\[\]$/;
						if ((multiName.test(elementName) || element.multiple) && element.selectedOptions && element.selectedOptions.length) {
							elementName = elementName.replace(multiName, '');
							for (let i = 0; i < element.selectedOptions.length; i++) {
								let option = element.selectedOptions[i];
								if (option.disabled) {
									continue;
								}
								formData.append(elementName, option.value);
							}
						} else {
							formData.append(elementName, value);
						}
						break;
				}
			});

			let xhr = new window.XMLHttpRequest();
			xhr.open('POST', actionUrl);
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					let {status, statusText, response} = xhr;
					// все плохо
					if (status !== 200) {
						console.log(xhr);
						window.alert([
							'Error!',
							'status: ' + status,
							'--------------------',
							statusText
						].join('\n'));
						preloader.hide();
						return false;
					}

					if (typeof response === 'string') {
						response = JSON.parse(response);
					}
					validateGetResponse($form, response, statusText, xhr);
				}
			};

			xhr.send(formData);
			return false;
		} catch (err) {
			window.alert('Catch error, see dev tools!');
			console.error(err);
		}
	}
};

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 */
function validate ($elements) {

	$elements.each((i, el) => {
		const $form = $(el);
		if ($form.hasInitedKey('validate-inited')) {
			return true;
		}

		const config = $.extend(true, {}, configDefault, {
			// current element custom config
		});

		$form.validate(config);
		validateHandlers($form, $form.data('validator'));
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default validate;
