'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import 'custom-jquery-methods/fn/has-inited-key';
import 'custom-jquery-methods/fn/get-my-elements';
import wsTabs from '#/_modules/wstabs';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @param {JQuery} $map
 * @private
 */
function createMap ($map) {
	const $container = $map.getMyElements('$mapContainer', '[data-google-map-container]', 'find');
	const $points = $map.getMyElements('$mapPoints', '[data-google-map-point]', 'find');
	const centerConfig = $points.filter('.is-active').data('google-map-point');

	// выгружаем ссылки
	const {Map, Marker, InfoWindow} = window.google.maps;
	const {on: tabOn} = wsTabs.events;
	const {active: tabActiveClass} = wsTabs.cssClass;

	// карта
	const mapConfig = $.extend({
		zoom: 16,
		styles: [{
			featureType: 'all',
			stylers: [{
				saturation: -100
			}]
		}]
	}, centerConfig);
	mapConfig.center = mapConfig.position;

	/**
	 * @type {Object}
	 * @prop {Function} setCenter
	 * @prop {Function} setZoom
	 */
	const map = new Map($container[0], mapConfig);
	const infoWindow = new InfoWindow({content: '2134234'});

	// маркеры
	$points.each((i, el) => {
		const $point = $(el);
		const content = $point.getMyElements('$mapInfoWindow', '[data-google-map-infowindow]', 'find')[0].outerHTML;
		const pointConfig = $.extend({
			// defaults
		}, $point.data('google-map-point'), {
			map
		});

		const marker = new Marker(pointConfig);

		$point.data('pointConfig', pointConfig);
		$point.data('pointContent', content);
		$point.data('pointMarker', marker);

		marker.addListener('click', function () {
			if ($point.hasClass(tabActiveClass)) {
				showInfoWindow($point);
			} else {
				$point.trigger('click');
			}
		});
	});

	// смена маркера
	$points.on(tabOn, function () {
		const $this = $(this);
		showInfoWindow($this);
	});

	// открытие infoWindow
	function showInfoWindow ($point) {
		const {
			pointContent: content,
			pointMarker: marker,
			pointConfig: config
		} = $point.data();

		const {
			position: center = {},
			zoom = null
		} = config;

		infoWindow.setContent(content);
		infoWindow.open(map, marker);
		map.setCenter(center);
		if (zoom) {
			map.setZoom(zoom);
		}
	}
}

/**
 * @type {Object}
 * @private
 */
const ggl = {
	src: 'https://maps.googleapis.com/maps/api/js',
	loaded: false
};

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {JQuery} $elements
 * @param {ModuleLoader} moduleLoader
 * @sourceCode
 */
function googleMapInit ($elements, moduleLoader) {
	if (ggl.loaded) {
		console.warn('Google map is already loaded!');
		return false;
	}

	const {googleMapQueries} = window.wezomConfig;
	const queries = Object.keys(googleMapQueries).map(q => {
		return q + '=' + googleMapQueries[q];
	}).join('&');
	const jsMapSrc = ggl.src + '?' + queries;

	window.jQuery.getScript(jsMapSrc, function () {
		$elements.each((i, el) => {
			const $map = $(el);
			if ($map.hasInitedKey('googleMapInited')) {
				return true;
			}
			createMap($map);
		});
	});
};

// ----------------------------------------
// Exports
// ----------------------------------------

export default googleMapInit;
