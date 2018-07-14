'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'select2/dist/js/select2.full';
import './s2s-extend.scss';

// ----------------------------------------
// Private
// ----------------------------------------

function translate () {
	let translates = (window.jsTranslations && window.jsTranslations['select2']) || {};
	if (Object.keys(translates).length === 0) {
		return console.warn('Переводы для select2 - отсутствуют!');
	}

	return {
		errorLoading: function () {
			return translates.errorLoading;
		},
		inputTooLong: function (args) {
			return translates.inputTooLong.replace(/\{0\}/, args.maximum);
		},
		inputTooShort: function (args) {
			return translates.inputTooShort.replace(/\{0\}/, args.minimum);
		},
		loadingMore: function () {
			return translates.loadingMore;
		},
		maximumSelected: function (args) {
			return translates.maximumSelected.replace(/\{0\}/, args.maximum);
		},
		noResults: function () {
			return translates.noResults;
		},
		searching: function () {
			return translates.searching;
		}
	};
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function s2s ($elements, moduleLoader) {
	$elements.each((i, el) => {
		const $element = $(el);
		const $form = $(el.form);

		if ($element.hasInitedKey('select2', false)) {
			return true;
		}

		const $disabledOption = $element.find('option[selected][disabled]');
		const placeholder = $disabledOption.html();
		$disabledOption.html('');
		if (el.multiple) {
			$disabledOption
				.removeAttr('selected').prop('selected', false)
				.removeAttr('disabled').prop('disabled', false);
		}

		const config = $.extend({
			placeholder,
			minimumResultsForSearch: 10,
			containerCssClass: 's2s-container s2s-container--default',
			dropdownCssClass: 's2s-dropdown s2s-dropdown--default',
			dropdownAutoWidth: true,
			width: '100%'
		}, $element.data('s2s'), {
			language: translate()
		});

		$element.select2(config);
		$element.on('select2:select', () => {
			/** @type Validator */
			const Validator = $form.data('validator');
			if (Validator) {
				Validator.element($element);
			}
		});

		$form.on('before-validator-reset', () => {
			$element.val(null).trigger('change');
		});
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default s2s;
