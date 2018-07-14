'use strict';

/**
 * Подключение плагина `prismjs`
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import Preloader from '../Preloader';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery.Selector} [selector="code[class*='lang']"]- поиск элементов по селектору
 * @param {JQuery} [$context=null] - контекст в котором будет выполнен поиск селектора
 * @sourceCode
 */
function prism (selector = 'code[class*="lang"]', $context = null) {
	const $codes = (selector && selector.jquery) ? selector : $(selector, $context);
	if ($codes.length) {
		const preloader = new Preloader($codes.parent('pre'));
		preloader.show();
		import(
			/* webpackChunkName: "prismjs" */
			'./prismjs-import'
		).then(() => {
			preloader.hide();
		});
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default prism;
