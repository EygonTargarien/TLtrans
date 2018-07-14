'use strict';

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Обертка
 * @param app
 * @returns {app.el.Button}
 * @private
 */
function wrapper (app) {
	const {El} = app.el;

	/**
	 * @classDesc Обертка создания кнопок
	 * @memberOf app.el
	 * @param {Object} [props={}] - свойства элемента
	 * @param {Function} [done] - коллбек создания
	 * @requires app.el.El
	 */
	class Button {
		constructor (props = {}, tag = 'button', done) {
			const buttonProps = El.mergeProps({
				class: 'button'
			}, props);

			const {before: iconBefore, after: iconAfter} = buttonProps.icons || {};
			delete buttonProps.icons;
			buttonProps.innerHTML = `<span>${buttonProps.innerHTML}</span>`;

			if (iconBefore) {
				// иконка перед текстом
			}

			if (iconAfter) {
				// иконка после текста
			}

			return new El(tag, buttonProps, done);
		}

		static get Submit () {
			return new Proxy(Button, {
				construct (Target, args) {
					const elementProps = El.mergeProps({
						type: 'submit',
						innerHTML: 'Отправить'
					}, args.shift());

					args[0] = 'button';
					return new Target(elementProps, ...args);
				}
			});
		}

		static get Reset () {
			return new Proxy(Button, {
				construct (Target, args) {
					const elementProps = El.mergeProps({
						type: 'reset',
						innerHTML: 'Сбросить'
					}, args.shift());

					args[0] = 'button';
					return new Target(elementProps, ...args);
				}
			});
		}
	};

	return Button;
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = wrapper;
