'use strict';

/**
 * Линтинг скриптов
 * @module
 * @author Dutchenko Oleg <dutchenko.o.dev@gmail.com>
 * @version 7.6.1
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const fs = require('fs');
const gulp = require('gulp');
const iF = require('gulp-if');
const eslint = require('gulp-eslint');

const {argv} = require('../../../config.html');
const logger = require('../utils/logger');

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * [FW] Gulp задача
 * @param {string} taskName
 * @param {Object} taskPaths - пути задачи
 * @param {string|Array.<string>} taskPaths.src - исходные файлы
 * @param {Object} options - параметры для модулей
 * @param {Object} options.eslint
 *
 * @returns {Function}
 */
function task (taskName, taskPaths, options) {
	let firstRun = true;
	let failOnError = argv.watch !== true;

	return gulp.task(taskName, done => {
		return gulp.src(taskPaths.src, {since: firstRun ? 0 : gulp.lastRun(taskName)})
			// линтитнг
			.pipe(eslint(options.eslint))
			.on('data', file => {
				const {eslint: es} = file;
				if (es && es.fixed) {
					logger('cyan', file.path);
					fs.writeFile(es.filePath, es.output, (err) => {
						if (err) {
							logger('red', 'Connot save fixed file');
							console.log(err.message);
						} else {
							if (es.errorCount) {
								logger('red', `Fixed partially. Errors left: ${es.errorCount}! Please fix them yourself!`);
							} else {
								logger('yellow', `Fixed automatically!`);
							}
						}
					});
				}
			})
			// форматирование результат
			.pipe(eslint.format())
			// ошибки в конце всей задчи, если есть
			.pipe(iF(failOnError, eslint.failAfterError()))
			// завершение задачи
			.on('end', () => {
				firstRun = false;
				done();
			});
	});
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = task;
