'use strict';


// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');
const webpack = require('webpack');

const logger = require('./_HTML/system/utils/logger');
const {argv, paths, isWebpack, styleLoaderInsertAtId, useSourcemapsOnProduction} = require('./config.html');

// ----------------------------------------
// Private
// ----------------------------------------

// Уведомление о старте работ
logger('yellow', '', 'Starting webpack...');
if (argv.production && useSourcemapsOnProduction !== true) {
	logger('red', 'Sourcemaps on production disabled! See config.html => configSystem.useSourcemapsOnProduction');
}

/**
 * Список плагинов для использования
 * @const {Array}
 * @private
 */
const plugins = [
	// не пропускать при ошибках
	new webpack.NoEmitOnErrorsPlugin(),

	// определяем дополнительные флаги,
	// которые будут достпны внутри файлов сборки
	new webpack.DefinePlugin({
		'IS_DEVELOP': JSON.stringify(!argv.production),
		'IS_PRODUCTION': JSON.stringify(argv.production),
		'IS_FTP': JSON.stringify(argv.ftp)
	})
];

/**
 * Список плагинов для postcss лоадера
 * @const {Array}
 * @private
 */
const postсssPlugins = [
	require('autoprefixer')({
		browsers: [
			'> 1%',
			'ie 11'
		],
		cascade: false
	}),
	require('css-mqpacker')({
		sort: require('sort-css-media-queries')
	})
];

/**
 * Составление исключений для babel-loader'а
 * @private
 * @see {@link https://regex101.com/r/VtFXpv/3/}
 * @returns {RegExp}
 */
function excludeBabelLoaderModules () {
	// список модулей который не нужно исключать
	let includeFolders = [
		'custom-jquery-methods',
		'wezom-module-loader',
		'swiper',
		'dom7'
	];

	let regexp = new RegExp(`node_modules[\\/|\\\\](?!(${includeFolders.join('|')})).*`);
	// console.log(regexp);
	return regexp;
}

// Если запуск webpack'a на прямую
if (isWebpack) {
	if (~argv.define.indexOf('analyzer')) {
		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
		plugins.push(new BundleAnalyzerPlugin({
			reportFilename: 'tmp/analyzer-report.html',
			statsFilename: 'tmp/stats.json',
			generateStatsFile: true
		}));
	}
}

// Если продакшн версия
if (argv.production) {
	// добавляем минификатор css
	postсssPlugins.push(
		require('cssnano')({
			zindex: false,
			autoprefixer: false,
			reduceIdents: false,
			discardUnused: false,
			discardComments: {
				removeAll: true
			}
		})
	);
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * Конфигурация сборки `webpack`
 * @const {Object}
 * @sourceCode
 */
const config = {
	mode: argv.production ? 'production' : 'development',
	entry: {
		initialize: path.join(process.cwd(), '_HTML/src/js/entry.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), path.join(paths.assets, '/js/')),
		publicPath: path.join(paths.toAssets, '/js/'),
		chunkFilename: 'async-modules/[name].js?v=[chunkhash]'
	},
	optimization: {
		minimize: argv.production,
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: excludeBabelLoaderModules(),
				use: [{
					loader: 'babel-loader'
				}]
			}, {
				test: /\.css$/,
				use: [{
					loader: 'style-loader',
					options: {
						insertAt: {
							before: '#' + styleLoaderInsertAtId
						}
					}
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: postсssPlugins
					}
				}]
			}, {
				test: /\.scss$/,
				use: [{
					loader: 'style-loader',
					options: {
						insertAt: {
							before: '#' + styleLoaderInsertAtId
						}
					}
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: postсssPlugins
					}
				}, {
					loader: 'sass-loader',
					options: {
						includePaths: [
							'./node_modules/',
							'./_HTML/src/sass/'
						]
					}
				}]
			}, {
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				use: ['url-loader']
			}
		]
	},
	resolve: {
		alias: {
			'#': path.join(process.cwd(), '_HTML/src/js')
		},
		modules: [
			'./node_modules/',
			'./_HTML/frontend-components/',
			'./_HTML/src/js',
			'./_HTML/src/js/_vendors/gsap/',
			'./_HTML/src/js/_vendors/gsap/easing/',
			'./_HTML/src/js/_vendors/gsap/plugins/',
			'./_HTML/src/js/_vendors/gsap/utils/'
		]
	},
	plugins: plugins,
	devtool: argv.production ? useSourcemapsOnProduction ? 'source-map' : false : 'inline-source-map',
	watch: argv.watch
};

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = config;
