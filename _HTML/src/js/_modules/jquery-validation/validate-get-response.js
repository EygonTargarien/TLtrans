'use strict';

/**
 * Обработка ответа от сервера
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import Preloader from '#/_modules/Preloader';
import GenerateMsg from '#/_modules/GenerateMsg';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * Вывод уведомлений
 * @param {JQuery} $form
 * @param {string} message
 * @param {boolean} [success]
 * @private
 */
function showMessage ($form, message, success) {
	// меняем на свой методо вывода уведомлений
	console.log('showMessage');
	console.log($form, message, success);
	window.alert([
		`response success - ${success}!`,
		'response message:\n',
		message
	].join('\n'));
};

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $form
 * @param {Object} response
 * @param {string} statusText
 * @param {Object} xhr
 * @param {string} response.response - текстовое сообщение
 * @param {boolean} response.success - успешный запрос
 * @param {string} [response.redirect] - урл для редиректа, если равен текущему урлу - перегражаем страницу
 * @param {boolean} [response.reload] - перегрузить страницу
 * @param {boolean} [response.reset] - сбросить форму
 * @param {Array} [response.clear] - сбросить форму
 * @private
 */
function validateGetResponse ($form, response, statusText, xhr) {
	const preloader = $form.data('preloader');
	let message = null;

	// обрабатываем ответ
	// ------------------
	if (typeof response === 'string') {
		response = JSON.parse(response);
	}

	if (response.reload || window.location.href === response.redirect) {
		return window.location.reload();
	}

	if (response.redirect) {
		return (window.location.href = response.redirect);
	}

	if (response.message) {
		message = new GenerateMsg(response.message);
	}

	if (response.success) {

		if (response.clear) {
			if (Array.isArray(response.clear)) {
				response.clear.forEach(clearSelector => {
					$form.find(clearSelector).val('');
				});
			} else {
				// игнорируемые типы инпутов
				let ignoredInputsType = [
					'submit',
					'reset',
					'button',
					'image'
				];
				$form.find('input, textarea, select').each((i, element) => {
					if (~ignoredInputsType.indexOf(element.type)) {
						return true;
					}
					element.value = '';
				});
			}
		} else if (response.reset) {
			$form.trigger('reset');
		}

		if (response.closeModal) {
			$.magnificPopup.close();
		}
		if (message) {
			message.setTypeMsg('success');
		}


		if (response.openModal){
			$.magnificPopup.open({
				items: {
					src: response.openModal
				},
				type: 'ajax'
			});
		}

	} else if (message) {
		message.setTypeMsg('error');
	}

	if (message) {
		message.show();
	}


	// showMessage($form, response.response, response.success);
	if (preloader instanceof Preloader) {
		preloader.hide();
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default validateGetResponse;
