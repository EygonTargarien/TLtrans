<?php
	namespace Core;
	class HTML {
		/**
		 * Путь к SVG спрайту
		 * Будет определен при первом вызове `HTML::svgSymbol()`
		 */
		private static $svgSymbolUrl = NULL;

		/**
		 * Вставка svg символа из спрайта
		 * @param  string $symbol
		 * @return string
		 */
		public static function svgSymbol ($symbol) {
			// при первом обрашении кэшируем путь к спрайту
			if (self::$svgSymbolUrl === NULL) {
				self::$svgSymbolUrl = self::media('assets/images/sprites/icons.svg', false, true);
			}
			return self::$svgSymbolUrl . '#' . $symbol;
		}

		public static function media($file, $absolute = false, $version = true)	{
			if ($version) {
				$v = '?v=' . filemtime(HOST . 'Media/' . trim($file, '/'));
			}
			if ($absolute) {
				return 'http://' . $_SERVER['HTTP_HOST'] . '/Media/' . trim($file, '/') . $v;
			}
			return '/Media/' . trim($file, '/') . $v;
		}
	}
