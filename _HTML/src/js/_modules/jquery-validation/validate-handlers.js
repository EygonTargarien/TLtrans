'use strict';

/**
 * Пользовательские обработчики формы
 * @module
 */

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $form
 * @param {Object} Validator {@link https://jqueryvalidation.org/?s=validator}
 * @param {Function} Validator.resetForm {@link https://jqueryvalidation.org/Validator.resetForm/}
 * @param {Function} Validator.element {@link https://jqueryvalidation.org/Validator.element/}
 */
function validateHandlers ($form, Validator) {
	// сабмит формы, блок отправки при ошибке скриптов
	const method = $form.attr('method') || 'post';
	$form.prop('method', method);
	$form.on('submit', event => event.preventDefault());

	// сброс формы
	$form.on('reset', () => Validator.resetForm());

	// проверка файлов, при смене
	$form.on('change', 'input[type="file"]', function () {
		Validator.element(this);
	});

	// дальше ваш код

	$form.on('click','.js-orderNext',function(){
		if (!Validator.form()){
			return false;
		} else{
			$form.data('valid', true);
		}
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default validateHandlers;
