'use strict';

/**
 * @fileOverview Основной файл инициализации модулей
 */

// ----------------------------------------
// Imports
// ----------------------------------------


import '#/_vendors/promise-polyfill';
import '#/_vendors/jquery';
import '#/extend/jQueryExtend';
import '#/_vendors/gsap/gsap';

import moduleLoader from '#/module-loader';
import wsTabs from '#/_modules/wstabs';
import toggleBlock from '#/_modules/toggleBlock';
import cookieData from '#/_modules/cookie-data';
import fixedHeader from '#/_modules/fixedHeader';


// ----------------------------------------
// Public
// ----------------------------------------

window.jQuery(document).ready($ => {
	moduleLoader.init($(document));
	cookieData.askUsage(); // если нужно использовать куки
	wsTabs.init();
    toggleBlock.init();
	fixedHeader.init();

});
