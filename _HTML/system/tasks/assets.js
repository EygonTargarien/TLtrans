'use strict';

/**
 * Трансфер статических файлов
 * @module
 * @author Dutchenko Oleg <dutchenko.o.dev@gmail.com>
 * @version 9.2.0
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');
const gulp = require('gulp');
const chalk = require('chalk');
const iF = require('gulp-if');
const rename = require('gulp-rename');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const multipipe = require('multipipe');

const {argv} = require('../../../config.html');
const logger = require('../utils/logger');
const notify = require('../utils/notify');
const CompiledFiles = require('../utils/compiled-files');

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Gulp задача
 * @param {string} taskName
 * @param {Object} taskPaths - пути задачи
 * @param {string|Array.<string>} taskPaths.src - исходные файлы
 * @param {string} taskPaths.dest - итоговая директория
 * @param {string} taskPaths.base - основная директория для путей
 * @param {RegExp} taskPaths.baseReplace - подмена основной директории для путей
 *
 * @param {Object} options - параметры для модулей
 * @param {Object} options.imageminPlugins
 * @param {Object} options.imageminOptions
 *
 * @param {Object} [bs={}] - browser-sync
 * @param {Object} [bs.reload] - метод перезагрузки сервера
 * @param {Function} [taskCb] - коллбек выполнения задачи
 *
 * @returns {Function}
 */
function task (taskName, taskPaths, options, bs = {reload () {}}, taskCb) {
	let checkNewer = argv.forceRun !== true;
	let notifyFlag = argv.notify;
	let minifyImages = (argv.production || argv.ftp) && options.disableImagemin !== true;
	let compiledFiles = new CompiledFiles();
	let hasErrors = false;
	let wasErrors = false;
	let imageminPlugins = [];
	let {
		imageminPlugins: imageminPluginsObject = {},
		imageminOptions = {}
	} = options;

	// options -> https://github.com/imagemin/imagemin-webp#options
	let webpConfig = Object.assign({
		preset: 'photo',
		quality: 85,
		alphaQuality: 100,
		method: 6,
		sns: 100,
		sharpness: 3
	}, options.webp || {});

	if (minifyImages) {
		for (let plugin in imageminPluginsObject) {
			let pluginConfig = imagemin[plugin](imageminPluginsObject[plugin]);
			imageminPlugins.push(pluginConfig);
		}
	}

	return gulp.task(taskName, done => {
		wasErrors = hasErrors;
		hasErrors = false;
		compiledFiles.reset();

		return gulp.src(taskPaths.src, {
			base: taskPaths.base
		})
			// подменяем base путь
			.on('data', file => {
				if (taskPaths.baseReplace) {
					file.relative.replace(taskPaths.baseReplace, function (str) {
						file.base = path.join(file.base, str);
					});
				}
			})

			.pipe(iF(
				checkNewer,
				newer({
					dest: taskPaths.dest
				})
			))

			// конвертация в webp
			.pipe(iF(
				file => {
					if (/--convert2webp/i.test(file.path)) {
						return /(tiff|jpe?g|png)/i.test(file.extname);
					}
					return false;
				},
				multipipe(
					rename((filePath) => {
						let prevName = filePath.basename;
						let dir = filePath.dirname;
						filePath.basename = filePath.basename.replace(/--convert2webp/, '');
						logger('cyan', `! Convert "${chalk.yellow(path.join(dir, prevName + filePath.extname))}" to "${chalk.yellow(path.join(dir, filePath.basename + '.webp'))}"`);
					}),
					webp(webpConfig)
				)
			))

			// проверка и оптимизация
			.pipe(iF(
				file => {
					if (minifyImages) {
						if (!/--no-optimize/i.test(file.path)) {
							return /(gif|jpe?g|png|svg)/i.test(file.extname);
						}
					}
					return false;
				},
				imagemin(imageminPlugins, imageminOptions)
					.on('error', function (err) {
						hasErrors = true;
						notify.onError(`${taskName} [gulp-imagemin]`, err.message);
						this.emit('end');
					})
			))

			// обход оптимизации
			.pipe(iF(
				file => /--no-optimize/i.test(file.path),
				rename((filePath) => {
					let prevName = filePath.basename;
					let ext = filePath.extname;
					let dir = filePath.dirname;
					let msg = [];

					if (/--no-optimize/i.test(prevName)) {
						filePath.basename = prevName.replace(/--no-optimize/, '');
						msg.push(`! Rename "${chalk.blue(path.join(dir, prevName + ext))}" to "${chalk.blue(path.join(dir, filePath.basename + ext))}"`);
						if (minifyImages) {
							msg.push('  and skip image optimization');
						}
					} else {
						msg.push('! Skip image optimization for ' + chalk.blue(path.join(dir, prevName + ext)));
					}

					logger('cyan', ...msg);
				})
			))

			.pipe(iF(
				checkNewer,
				newer({
					dest: taskPaths.dest
				})
			))

			// сохраняем файлы
			.pipe(compiledFiles.pipe())
			.pipe(gulp.dest(taskPaths.dest))

			// уведомление
			.pipe(iF(
				notifyFlag,
				notify.onLast(taskName, compiledFiles.list)
			))

			// завершение задачи
			.on('end', () => {
				if (hasErrors) {
					return done();
				} else if (wasErrors) {
					notify.onResolved(taskName);
					wasErrors = false;
				}

				if (!notifyFlag) {
					logger('cyan', `New files: [${compiledFiles.list.length}]`);
				}

				checkNewer = true;
				if (compiledFiles.list.length) {
					bs.reload();
				}

				if (typeof taskCb === 'function') {
					taskCb();
				}
			});
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = task;
