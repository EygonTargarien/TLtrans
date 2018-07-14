// об'явление на сайте
// var $wzmOld_PARAMS = {c:50,a:6.1,ios:10};
// var $wzmOld_BLOCK = false;
// var $wzmOld_LANG = $.LANG_SITE || 'ua';
// var $wzmOld_URL_IMG = 'pic/wezom-info-red.gif';
// var $wzmOld_URL_WEZOM = 'http://wezom.com.ua/';
// var $wzmOld_URL_INFO = 'http://wezom.com.ua/';
// var $wzmOld_STYLE = 'string css style';
var lng, navi = window.navigator, // eslint-disable-line one-var
	$wOld = {
		version: 1,
		brws: {},
		params: {
			a: 5,
			i: 12,
			e: 15,
			f: 55,
			o: 50,
			s: 10,
			ios: 10,
			c: 60,
			w: 7,
			session: false
		}
	};

$wOld.txt = {
	ru: {
		'title': 'Агентство системных интернет-решений Wezom',
		'close': 'Закрыть',
		'small': ' или младше',
		'end-1': '<br>Сайт может работать неправильно. Мы рекомендуем использовать <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Узнайте как обновить Ваш браузер">Узнайте, как обновить Ваш браузер >></a></p>',
		'end-2': '<br>Сайт может работать неправильно. Мы рекомендуем использовать <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Узнайте почему >>">Узнайте почему >></a></p>',
		'end-3': '<br>Сайт может работать неправильно.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Браузеры в которых мы работаем">Браузеры, в которых мы работаем</a></p>',
		'inform': '<p>Вы используете старый браузер - <b>%w</b>!',
		'device': '<p>Вы используете - <b>%w</b>!',
		'old-os': '<p>Вы используете устаревшую операционную систему - <b>%w</b>!',
		'use-edge': '<p>Сайт может работать неправильно. Мы рекомендуем использовать <a href="https://www.microsoft.com/ru-ru/windows/microsoft-edge" title="Microsoft Edge" rel="noopener" target="_blank">Microsoft EdgeHTML '+$wOld.params.e+'</a></p>',
		'ffx-esr': '<p>Вы используете <b> <a href="https://www.mozilla.org/en-US/firefox/organizations/" title="Firefox - ESR" rel="noopener" target="_blank">Firefox - ESR</a></b>!',
		'unknown': '<p>Вы используете неизвестный нам браузер!'
	},
	ua: {
		'title': 'Агентство системних інтернет-рішень Wezom',
		'close': 'Закрити',
		'small': ' або молодше',
		'end-1': '<br>Сайт може працювати неправильно. Ми рекомендуємо використовувати <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Дізнайтеся як оновити Ваш браузер">Дізнайтеся, як оновити Ваш браузер >></a></p>',
		'end-2': '<br>Сайт може працювати неправильно. Ми рекомендуємо використовувати <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Дізнайтеся чому >>">Дізнайтеся чому >></a></p>',
		'end-3': '<br>Сайт може працювати неправильно.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Браузери в яких ми працюємо">Браузери в яких ми працюємо</a></p>',
		'inform': '<p>Ви використовуєте старий браузер - <b>%w</b>!',
		'device': '<p>Ви використовуєте - <b>%w</b>!',
		'old-os': '<p>Ви використовуєте застарілу операційну систему - <b>%w</b>!',
		'use-edge': '<p>Сайт може працювати неправильно. Ми рекомендуємо використовувати <a href="https://www.microsoft.com/uk-ua/windows/microsoft-edge" title="Microsoft Edge" rel="noopener" target="_blank">Microsoft EdgeHTML '+$wOld.params.e+'</a></p>',
		'ffx-esr': '<p>Ви використовуєте <b> <a href="https://www.mozilla.org/en-US/firefox/organizations/" title="Firefox - ESR" rel="noopener" target="_blank">Firefox - ESR</a></b>!',
		'unknown': '<p>Ви використовуєте невідомий нам браузер!'
	},
	pl: {
		'title': 'Studio Wezom',
		'close': 'Zamknąć',
		'small': ' lub młodszy',
		'end-1': '<br>Strona może nie działać prawidłowo. Zalecamy używanie <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Dowiedz się, jak uaktualnić przeglądarkę">Dowiedz się, jak uaktualnić przeglądarkę >></a></p>',
		'end-2': '<br>Strona może nie działać prawidłowo. Zalecamy używanie <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Dowiedz się, dlaczego >>">Dowiedz się, dlaczego >></a></p>',
		'end-3': '<br>Strona może nie działać prawidłowo.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Przeglądarki , w których działamy">Przeglądarki , w których działamy</a></p>',
		'inform': '<p>Używasz starej przeglądarki - <b>%w</b>!',
		'device': '<p>Używasz - <b>%w</b>!',
		'old-os': '<p>Używasz przestarzałej system operacyjny - <b>%w</b>!',
		'use-edge': '<p>Strona może nie działać prawidłowo. Zalecamy używanie <a href="https://www.microsoft.com/en-us/windows/microsoft-edge" title="Microsoft Edge" rel="noopener" target="_blank">Microsoft EdgeHTML '+$wOld.params.e+'</a></p>',
		'ffx-esr': '<p>Używasz <b> <a href="https://www.mozilla.org/en-US/firefox/organizations/" title="Firefox - ESR" rel="noopener" target="_blank">Firefox - ESR</a></b>!',
		'unknown': '<p>Korzystania z nieznanych nam robi!'
	},
	en: {
		'title': 'Wezom Agency for System Internet Solutions',
		'close': 'Close',
		'small': ' or younger',
		'end-1': '<br>The site may not work properly. We recommend you to use <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Learn how to update your browser">Learn how to update your browser >></a></p>',
		'end-2': '<br>The site may not work properly. We recommend you to use <b>%b</b>.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Find out why >>">Find out why >></a></p>',
		'end-3': '<br>The site may not work properly.</p>', // <p><a href="%u" rel="noopener" target="_blank" title="Browsers in which we operate">Browsers in which we operate</a></p>',
		'inform': '<p>You are using an old browser - <b>%w</b>!',
		'device': '<p>You are using - <b>%w</b>!',
		'old-os': '<p>You are using an outdated operating system - <b>%w</b>!',
		'use-edge': '<p>The site may not work properly. We recommend you to use <a href="https://www.microsoft.com/en-us/windows/microsoft-edge" title="Microsoft Edge" rel="noopener" target="_blank">Microsoft EdgeHTML '+$wOld.params.e+'</a></p>',
		'ffx-esr': '<p>You are using <b> <a href="https://www.mozilla.org/en-US/firefox/organizations/" title="Firefox - ESR" rel="noopener" target="_blank">Firefox - ESR</a></b>!',
		'unknown': '<p>You are using an unknown browser!'
	}
};

/* eslint-disable no-multi-str */
$wOld.styler = '\
.wzmMsg_Wrapp {position:fixed;z-index:9998;bottom:0;left:0;width:100%;height:auto;overflow:visible;padding:0 0 3px;margin:0;background-color:#fcea9c;border-top:1px solid #ababab;font-size:12px;line-height:14px;font-weight:normal;font-style:normal;font-family:sans-serif;color:#000;-webkit-backface-visibility:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\
.wzmMsg_Text {min-height:24px;padding:0 30px 0 10px;margin-left:70px;border-left:1px solid #ababab;}\
.wzmMsg_Text > p {white-space:normal;margin:5px 0;}\
.wzmMsg_Text a {color:#f00;text-decoration:underline;}\
.wzmMsg_Text a:hover {color:#900;}\
.wzmMsg_Link {position:absolute;display:block;top:7px;left:10px;width:50px;height:18px;text-decoration:none !important;outline:none;}\
.wzmMsg_Link img {border:none;}\
.wzmMsg_Close {position:absolute;display:block;top:5px;right:5px;width:26px;height:26px;line-height:26px;font-size:22px;text-align:center;cursor:hand;cursor:pointer;}\
.wzmMsg_Close > span {display:block;position:relative;width:26px;height:26px;line-height:26px;}\
.wzmMsg_Close:hover {background-color:#ead371;}\
.wzmMsg_Close:active {background-color:#beaf6e;}';
/* eslint-enable no-multi-str */

function extend (a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}

function newElement (n, c, i) {
	var x = document.createElement(n);
	if (i) {
		x.id = i;
	}
	if (c) {
		x.className = c;
	}
	return x;
}

function getEnd (i) {
	var x;
	switch (i) {
		case 'inform':
			x = 1;
			break;
		case 'unknown':
			x = 3;
			break;
		default:
			x = 2;
	}
	return x;
}

// function objToString (obj) {
// 	var str = '';
// 	for (var p in obj) {
// 		if (obj.hasOwnProperty(p)) {
// 			str += p + '::' + obj[p] + '\n';
// 		}
// 	}
// 	return str;
// }

$wOld.brws_return = function (a, b, c, d) {
	this.brws = {
		tpl: a,
		vers: b,
		name: c,
		info: d
	};
};

$wOld.alert = function () {
	var br = '\n', // eslint-disable-line one-var
		str = '';
	str += '---------- ua ----------' + br + br + navi.userAgent + br + br;
	str += '---------- min data ----------' + br;
	for (var k in this.params) {
		str += k + ': ' + this.params[k] + br;
	}
	str += '---------- your data ----------' + br;
	for (var x in this.brws) {
		str += x + ': ' + this.brws[x] + br;
	}

	// alert(str);
	var n = /\n/g;
	for (var m = n.exec(str); m; m = n.exec(str)) {
		str = str.replace(m[0], '<br />');
	}
	var pre = newElement('pre');
	pre.innerHTML = str;
	pre.style.whiteSpace = 'normal';
	document.body.appendChild(pre);
};

$wOld.brws_get = function () {
	var n, // eslint-disable-line one-var
		i = false,
		ua = navi.userAgent,
		names = {
			a: 'Android',
			i: 'Internet Explorer',
			e: 'Microsoft EdgeHTML',
			f: 'Firefox',
			o: 'Opera',
			s: 'Apple Safari',
			ios: 'iPhone / iPod / iPad OS',
			c: 'Chrome',
			w: 'Windows',
			x: 'Other'
		};

	// alert(ua);
	if (/Android/i.test(ua)) {
		n = 'a';
	} else if (/iphone|ipod|ipad|Macintosh/i.test(ua)) {
		n = 'ios';
	} else if (/Trident.*rv:(\d+\.\d+)/i.test(ua)) {
		n = 'i';
	} else if (/Trident.(\d+\.\d+)/i.test(ua)) {
		n = 'io';
	} else if (/MSIE.(\d+\.\d+)/i.test(ua)) {
		n = 'i';
	} else if (/Edge.(\d+\.\d+)/i.test(ua)) {
		n = 'i';
	} else if (/OPR.(\d+\.\d+)/i.test(ua)) {
		n = 'o';
	} else if (/Chrome.(\d+\.\d+)/i.test(ua)) {
		n = 'c';
	} else if (/Firefox.(\d+\.\d+)/i.test(ua)) {
		n = 'f';
	} else if (/Version.(\d+.\d+).{0,10}Safari/i.test(ua)) {
		n = 's';
	} else if (/Safari.(\d+)/i.test(ua)) {
		n = 'so';
	} else if (/Opera.*Version.(\d+\.\d+)/i.test(ua)) {
		n = 'o';
	} else if (/Opera.(\d+\.?\d+)/i.test(ua)) {
		n = 'o';
	} else if (/bot|googlebot|facebook|slurp|wii|silk|blackberry|maxthon|maxton|mediapartners|dolfin|dolphin|adsbot|silk|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|mobile|epiphany|konqueror|rekonq|symbian|webos|coolnovo|blackberry|bb10|RIM|PlayBook|PaleMoon|QupZilla|YaBrowser/i.test(ua)) {
		n = 'x';
	} else {
		this.brws_return('x', 0, names[n], 'unknown');
		return;
	}

	// alert(ua);

	var v = parseFloat(RegExp.$1);

	if (document.all && !document.addEventListener) {
		n = 'i';
		v = 8;
	} else if (document.all && !window.atob && !!document.addEventListener) {
		n = 'i';
		v = 9;
	}

	// ос тест
	if (/windows.nt.5.0|windows.nt.4.0|windows.98|os x 10.4|os x 10.5|os x 10.3|os x 10.2/.test(ua)) {
		i = 'old-os';
	}

	// win
	if (ua.toLowerCase().indexOf('windows nt 4.0') > 0) {
		i = 'old-os';
		n = 'w';
		v = '95-98';
	}
	if (ua.toLowerCase().indexOf('windows nt 5.0') > 0) {
		i = 'old-os';
		n = 'w';
		v = '2000';
	}
	if (ua.toLowerCase().indexOf('windows nt 5.1') > 0) {
		if ($wOld.params.w > 5) {
			i = 'old-os';
			n = 'w';
			v = 'XP';
		}
	}
	if (ua.toLowerCase().indexOf('windows nt 6.0') > 0) {
		if ($wOld.params.w > 6) {
			i = 'old-os';
			n = 'w';
			v = 'Vista';
		}
	}

	// ffx-esr
	if (n === 'f' && (Math.round(v) === 24 || Math.round(v) === 31)) {
		i = 'ffx-esr';
	}

	if (n === 'a') {
		v = parseFloat(ua.match(/Android\s+([\d\.]+)/)[1]); // eslint-disable-line no-useless-escape
		if (v < this.params[n]) {
			i = 'device';
		}
	}

	if (n === 'ios') {
		v = parseFloat(ua.match(/OS\s+X?\s*([\d\.]+)/)[1]); // eslint-disable-line no-useless-escape
		if (v < this.params[n]) {
			i = 'device';
		}
	}

	if (n === 'x') {
		v = v || 0;
		i = 'unknown';
		this.brws_return(n, v, names[n], i);
	}

	if (n === 'so') {
		v = ((v < 100) && 1.0) || ((v < 130) && 1.2) || ((v < 320) && 1.3) || ((v < 520) && 2.0) || ((v < 524) && 3.0) || ((v < 526) && 3.2) || 4.0;
		n = 's';
	}

	if (n === 'i' && v === 7 && window.XDomainRequest) {
		v = 8;
	}

	if (document.all && !!window.atob && !!document.addEventListener) {
		n = 'i';
		v = 10;
	}

	if (n === 'io') {
		n = 'i';
		if (v > 6) {
			v = 11;
		} else if (v > 5) {
			v = 10;
		} else if (v > 4) {
			v = 9;
		} else if (v > 3.1) {
			v = 8;
		} else if (v > 3) {
			v = 7;
		} else {
			v = 9;
		}
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		n = 'e';
		v = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		if (v < this.params[n]) {
			i = 'inform';
		}
	}

	this.brws_return(n, v, names[n], i);
};

$wOld.informer = function () {
	var i = this.brws.info, // eslint-disable-line one-var
		n = this.brws.name,
		v = this.brws.vers,
		t = this.brws.tpl,
		end = getEnd(i);
	var txt = this.txt[lng]['end-' + end];
	if (n === 'Internet Explorer') {
		txt = this.txt[lng]['use-edge'];
	}
	var str = this.txt[lng][i] + ' ' + txt;

	if (t === 'i' && v === 8) {
		v = '8' + this.txt[lng]['small'];
	}

	str = str.replace(/%w/, n + ' ' + v);
	str = str.replace(/%u/, this.url);
	str = str.replace(/%d/, n + ' ' + this.params[t]);
	str = str.replace(/%b/, n + ' ' + this.params[t]);

	var div = newElement('div', 'wzmMsg_Wrapp', 'wzmMsg_OldInform');

	var inner = newElement('div', 'wzmMsg_Text');
	inner.innerHTML = str;

	var link = newElement('a', 'wzmMsg_Link');
	link.href = this.wezom;
	link.target = '_blank';
	link.title = this.txt[lng]['title'];

	var img = newElement('img');
	img.src = this.image;
	img.width = 50;
	img.height = 18;
	img.alt = this.txt[lng]['title'];
	link.appendChild(img);

	var closer = newElement('div', 'wzmMsg_Close');
	closer.title = this.txt[lng]['close'];
	closer.innerHTML = '<span onclick=\'this.parentNode.parentNode.style.display="none"\';>&times;</span>';

	var sheet = newElement('style');

	div.appendChild(inner);
	div.appendChild(link);
	div.appendChild(closer);
	var bodyElement = document.body;
	bodyElement.appendChild(div);

	document.getElementsByTagName('head')[0].appendChild(sheet);
	try {
		sheet.innerText = this.styler;
		sheet.innerHTML = this.styler;
	} catch (e) {
		try {
			sheet.styleSheet.cssText = this.styler;
		} catch (e) {
			console.log(e);
		}
	}
};

$wOld.check = function (options, site_disable, options_lang, options_styler) { // eslint-disable-line camelcase
	lng = options_lang || document.documentElement.getAttribute('lang') || navi.language || navi.browserLanguage || navi.userLanguage || 'ru'; // eslint-disable-line camelcase
	lng = lng.toLowerCase().substr(0, 2);
	var lng_flag = true; // eslint-disable-line camelcase

	for (var key in this.txt) {
		if (key === lng) {
			lng_flag = false; // eslint-disable-line camelcase
		}
	}

	if (lng_flag) { // eslint-disable-line camelcase
		lng = 'en';
	}

	if (typeof options === 'object') {
		this.params = extend(this.params, options);
	}

	if (typeof options_styler === 'string') { // eslint-disable-line camelcase
		$wOld.styler = options_styler; // eslint-disable-line camelcase
	}
	if (this.params.session) {
		if (sessionStorage['wOld'] === 'once') { // eslint-disable-line no-undef
			return;
		}
		sessionStorage['wOld'] = 'once'; // eslint-disable-line no-undef
	}

	this.brws_get();

	if ((this.brws.info === false) && (this.brws.vers < this.params[this.brws.tpl])) {
		this.brws.info = 'inform';
	}

	if (/Google Page Speed/i.test(navi.userAgent)) {
		this.brws.info = false;
	}

	if (this.brws.info === false) {
		return; // eslint-disable-line no-useless-return
	} else {
		this.informer();
	}
};

var o, // eslint-disable-line one-var
	b,
	l = false,
	s;

if (typeof $wzmOld_PARAMS !== 'undefined') { // eslint-disable-line camelcase
	o = $wzmOld_PARAMS; // eslint-disable-line camelcase, no-undef
} else {
	o = false;
}

if (typeof $wzmOld_BLOCK !== 'undefined') { // eslint-disable-line camelcase
	b = $wzmOld_BLOCK; // eslint-disable-line camelcase, no-undef
} else {
	b = false;
}

if (typeof $wzmOld_LANG !== 'undefined') { // eslint-disable-line camelcase
	l = $wzmOld_LANG; // eslint-disable-line camelcase, no-undef
} else {
	l = false;
}

if (typeof $wzmOld_URL_IMG !== 'undefined') { // eslint-disable-line camelcase
	$wOld.image = $wzmOld_URL_IMG; // eslint-disable-line camelcase, no-undef
} else {
	$wOld.image = '/css/pic/wezom-info-red.gif';
}

if (typeof $wzmOld_URL_WEZOM !== 'undefined') { // eslint-disable-line camelcase
	$wOld.wezom = $wzmOld_URL_WEZOM; // eslint-disable-line camelcase, no-undef
} else {
	$wOld.wezom = 'https://wezom.com.ua/';
}

if (typeof $wzmOld_URL_INFO !== 'undefined') { // eslint-disable-line camelcase
	$wOld.url = $wzmOld_URL_INFO; // eslint-disable-line camelcase, no-undef
} else {
	$wOld.url = 'https://wezom.com.ua/browser/';
}

if (typeof $wzmOld_STYLE !== 'undefined') { // eslint-disable-line camelcase
	s = $wzmOld_STYLE; // eslint-disable-line camelcase, no-undef
} else {
	s = false;
}

$wOld.check(o, b, l, s);
