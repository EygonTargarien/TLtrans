'use strict';

/**
 * Модуль для работы с куки
 * @module
 */

// ----------------------------------------
// Private
// ----------------------------------------

const {
	encodeURIComponent: encoder,
	decodeURIComponent: decoder
} = window;

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * Работа с `document.cookie`
 * @namespace cookieData
 * @sourceCode
 */
const cookieData = {
	/**
	 * Добавление записи
	 * @param {string} key
	 * @param {*} value
	 * @param {Object} [options={}]
	 * @param {Date|number|string} [options.expires]
	 * @param {string} [options.path]
	 * @param {string} [options.domain]
	 * @param {boolean} [options.secure]
	 * @see {@link https://learn.javascript.ru/cookie#функция-setcookie-name-value-options}
	 * @sourceCode
	 */
	add (key, value, options = {}) {
		if (!this.allowUsage && (key !== this.allowUsageKey)) {
			console.warn('Cookie usage is disallowed!');
			return false;
		}
		let expires = options.expires;

		if (typeof expires === 'number' && expires) {
			let d = new Date();
			d.setTime(d.getTime() + expires * 1000);
			expires = options.expires = d;
		}

		if (expires && expires.toUTCString) {
			options.expires = expires.toUTCString();
		}

		value = encoder(value);
		let updatedCookie = `${key}=${value}`;

		for (let propName in options) {
			updatedCookie += `; ${propName}`;
			let propValue = options[propName];
			if (propValue !== true) {
				updatedCookie += `=${propValue}`;
			}
		}

		document.cookie = updatedCookie;
	},

	/**
	 * Получение куки по ключу
	 * @param key
	 * @return {string|undefined}
	 * @see {@link https://learn.javascript.ru/cookie#функция-getcookie-name}
	 * @sourceCode
	 */
	receive (key) {
		let matches = document.cookie.match(new RegExp(
			`(?:^|; )${key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)` // eslint-disable-line no-useless-escape
		));
		return matches ? decoder(matches[1]) : undefined;
	},

	/**
	 * Удаление куки по ключу
	 * @param {string} key
	 * @see {@link https://learn.javascript.ru/cookie#функция-deletecookie-name}
	 * @sourceCode
	 */
	delete (key) {
		this.add(key, '', {expires: -1});
	},

	/**
	 * Задать вопрос о пользовательском согласии использавния куки
	 * @return {boolean}
	 * @sourceCode
	 */
	askUsage () {
		if (this.allowUsage) {
			return false;
		}

		this.$infoBlock = this.$infoBlock || $('[data-cookie-info]');
		this.$infoButton = this.$infoButton || $('[data-cookie-submit]');

		if (this.$infoBlock.length && this.$infoButton.length) {
			const hiddenClass = 'is-hidden';
			this.$infoButton.on('click', () => {
				this.$infoBlock.addClass(hiddenClass);
				this.add(this.allowUsageKey, this.allowUsageValue);
			});

			window.setTimeout(() => {
				this.$infoBlock.removeClass(hiddenClass);
			}, this.allowUsageDelay);
			return true;
		}
	},

	/**
	 * Проверка пользовательского согласия
	 * на использования файлов cookie
	 * @return {boolean}
	 * @protected
	 * @sourceCode
	 */
	get allowUsage () {
		return this.receive(this.allowUsageKey) === this.allowUsageValue;
	},

	/**
	 * Ключ проверки пользовательского согласия
	 * на использования файлов cookie
	 * @type {string}
	 * @default 'allow-cookie-usage'
	 * @protected
	 * @sourceCode
	 */
	get allowUsageKey () {
		return 'allow-cookie-usage';
	},

	/**
	 * Значение ключа проверки пользовательского согласия
	 * на использования файлов cookie
	 * @type {string}
	 * @default 'true'
	 * @protected
	 * @sourceCode
	 */
	get allowUsageValue () {
		return 'true';
	},

	/**
	 * Задержка (ms) для проверки пользовательского согласия
	 * на использования файлов cookie
	 * @type {number}
	 * @default 2000
	 * @protected
	 * @sourceCode
	 */
	get allowUsageDelay () {
		return 2000;
	}
};

// ----------------------------------------
// Exports
// ----------------------------------------

export default cookieData;
