<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup">
	<div class="container">
		<div class="title _text-center">Register</div>

		<form class="form js-init" method="post" data-ajax="hidden/response/answer.php">

			<div class="grid grid--1 grid--sm-2 grid--hspace-lg">
				<div class="gcell">
					<div class="form-group">
						<input class="form-group__input" type="text" required="" placeholder="Enter username" name="user-reg" data-rule-minlength="3">
					</div>
				</div>
				<div class="gcell">
					<div class="form-group">
						<input class="form-group__input" type="text" placeholder="Skype (Optional)" name="skype-reg">
					</div>
				</div>
			</div>

			<div class="form-group _mb-lg">
				<input class="form-group__input has-error" type="email" required="" name="email" value="demo@site.com" data-rule-remote="./hidden/response/email.php" aria-invalid="true">
			</div>

			<div class="grid grid--1 grid--sm-2 grid--hspace-lg">
				<div class="gcell">
					<div class="form-group">
						<input class="form-group__input" type="password" required="" placeholder="Enter password" id="password-in" name="password-in">
					</div>
				</div>
				<div class="gcell">
					<div class="form-group">
						<input class="form-group__input" type="password" required="" placeholder="Repeat password" id="password-equal" name="password-equal" data-rule-equalto="[name=&quot;password-in&quot;]">
					</div>
				</div>
			</div>

			<div class="form-group">
				<select class="form-group__select" required name="select">
					<option selected disabled="">Country you play from</option>
					<option value="01">Country 01</option>
					<option value="02">Country 02</option>
					<option value="03">Country 03</option>
					<option value="04">Country 04</option>
					<option value="05">Country 05</option>
				</select>
			</div>

			<div class="form-group _mb-def">
				<label class="form-check">
					<input type="checkbox" required="" name="remember-login" value="1">
					<span>I have read and agree to the
						<a href="#" class="js-init" data-mfp="ajax" data-mfp-src="hidden/policy.php">Privacy Policy</a>
					</span>
				</label>
				<div>
					<label class="has-error" for="checkbox" id="checkbox-error" style="display: none;"></label>
				</div>
			</div>

			<div class="grid grid--1 grid--sm-2">
				<div class="gcell">
					<div class="grid _justify-center">
						<button type="submit" class="button ">
							<span> Register </span>
						</button>
					</div>

				</div>
				<div class="gcell">
					<div class="grid _justify-center">
						<button class="button js-init" data-mfp="ajax" data-mfp-src="hidden/login.php">
							<span>Back to Enter</span>
						</button>
					</div>
				</div>
			</div>

			<div class="social social--login _ptb-def">
				<ul class="social__list">
					<li class="social__item">
						<span class="social__link" target="_blank" data-ulogin-class=".ulogin-button-facebook">
							<svg viewBox="0 0 96.124 96.123" width="96.124" height="96.123">
								<use xlink:href="<?php echo HTML::svgSymbol( 'facebook' ); ?>"></use>
							</svg>

						</span>
					</li>
					<li class="social__item">
						<span class="social__link" target="_blank" data-ulogin-class=".ulogin-button-google">
							<svg viewBox="0 0 491.858 491.858" width="491.858" height="491.858">
								<use xlink:href="<?php echo HTML::svgSymbol( 'google' ); ?>"></use>
							</svg>

						</span>
					</li>
				</ul>
				<div class="social__register" hidden>
					<script src="//ulogin.ru/js/ulogin.js"></script>
					<div id="register" data-ulogin="display=panel;theme=classic;fields=first_name,last_name;providers=facebook,google;hidden=twitter,yandex,odnoklassniki,livejournal,openid,lastfm,linkedin,liveid,soundcloud,steam,flickr,uid,youtube,webmoney,foursquare,tumblr,googleplus,vimeo,instagram,wargaming;redirect_uri=http%3A%2F%2F;mobilebuttons=0;"></div>
				</div>
			</div>
		</form>
	</div>
</div>
