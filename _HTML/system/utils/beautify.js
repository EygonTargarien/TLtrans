'use strict';

/**
 * Форматирование разметки
 * @module
 * @author Dutchenko Oleg <dutchenko.o.dev@gmail.com>
 * @version 9.2.0
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const jsBeautify = require('js-beautify');

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * Форматирование разметки
 * @param {string} markup
 * @returns {string} отформатированная разметка
 */
function beautify (markup) {
	return jsBeautify.html(markup, {
		indent_level: 0,
		eol: '\n',
		indent_with_tabs: true,
		preserve_newlines: true,
		max_preserve_newlines: 1,
		jslint_happy: false,
		space_after_anon_function: false,
		brace_style: 'collapse',
		keep_array_indentation: false,
		keep_function_indentation: false,
		space_before_conditional: true,
		break_chained_methods: false,
		eval_code: false,
		indent_inner_html: true,
		unescape_strings: false,
		wrap_line_length: 0,
		wrap_attributes: 'auto',
		wrap_attributes_indent_size: 4,
		end_with_newline: true,
		extra_liners: [
			'body',
			'noscript',
			'/body'
		],
		unformatted: [
			'pre',
			'code',
			'script',
			'style'
		]
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = beautify;
