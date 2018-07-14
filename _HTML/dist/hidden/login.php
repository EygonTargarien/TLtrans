<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup">
	<div class="container">
		<div class="title _text-center">Login</div>

		<form class="form js-init" data-ajax="hidden/response/answer.php">

			<div class="form-group">
				<input class="form-group__input" type="email" required placeholder="Your email" name="email-login">
			</div>

			<div class="form-group">
				<input class="form-group__input" type="password" required="" placeholder="Your password" name="password-login">
			</div>

			<div class="grid grid--1 grid--sm-2 _mt-xl _mb-xl">
				<div class="gcell">
					<div class="form-group">
						<label class="form-check">
							<input type="checkbox" required="" name="remember-login" value="1">
							<span>Remember me</span>
						</label>
						<div>
							<label class="has-error" for="checkbox" id="checkbox-error" style="display: none;"></label>
						</div>
					</div>
				</div>
				<div class="gcell _text-right">
					<div class="link link--type1  js-init" data-mfp="ajax" data-mfp-src="hidden/forgotPassword.php">
						<span>Forgot your password?</span>
					</div>
				</div>
			</div>

			<div class="grid grid--1 grid--sm-2 grid--hspace-lg">
				<div class="gcell">
					<div class="grid _justify-center">
						<button type="submit" class="button ">
							<span>Enter</span>
						</button>
					</div>
				</div>
				<div class="gcell">
					<div class="grid _justify-center">
						<button class="button js-init" data-mfp="ajax" data-mfp-src="hidden/register.php">
							<span>Go to Register</span>
						</button>
					</div>

				</div>
			</div>

			<div class="social social--login _ptb-def">
				<ul class="social__list">
					<li class="social__item">
						<span class="social__link js-init" target="_blank" data-ulogin-class=".ulogin-button-facebook">
							<svg viewBox="0 0 96.124 96.123" width="96.124" height="96.123">
								<use xlink:href="<?php echo HTML::svgSymbol( 'facebook' ); ?>"></use>
							</svg>

						</span>
					</li>
					<li class="social__item">
						<span class="social__link js-init" target="_blank" data-ulogin-class=".ulogin-button-google">
							<svg viewBox="0 0 491.858 491.858" width="491.858" height="491.858">
								<use xlink:href="<?php echo HTML::svgSymbol( 'google' ); ?>"></use>
							</svg>

						</span>
					</li>
				</ul>
				<div class="social__ulogin">
					<script src="//ulogin.ru/js/ulogin.js"></script>
					<div id="login" data-ulogin="display=panel;theme=classic;fields=first_name,last_name;providers=facebook,google;hidden=twitter,yandex,odnoklassniki,livejournal,openid,lastfm,linkedin,liveid,soundcloud,steam,flickr,uid,youtube,webmoney,foursquare,tumblr,googleplus,vimeo,instagram,wargaming;redirect_uri=http%3A%2F%2F;mobilebuttons=0;"></div>
				</div>
			</div>
		</form>
	</div>
</div>
