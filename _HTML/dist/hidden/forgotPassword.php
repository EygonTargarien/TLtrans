<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup">
	<div class="container">
		<div class="title _text-center">Forgot the password</div>

		<form class="form js-init" data-ajax="hidden/response/answer.php">
			<div class="form-group _mb-xl">
				<input class="form-group__input" type="email" required placeholder="Your email" name="email-forgot">
			</div>

			<div class="grid grid--1 grid--sm-2 grid--hspace-lg">
				<div class="gcell">
					<div class="grid _justify-center">
						<button type="submit" class="button ">
							<span>Get password</span>
						</button>
					</div>
				</div>

				<div class="gcell">
					<div class="grid _justify-center">
						<button class="button js-init" data-mfp="ajax" data-mfp-src="hidden/login.php">
							<span>I REMEMBERED</span>
						</button>
					</div>
				</div>
			</div>
		</form>

	</div>
</div>
