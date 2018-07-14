<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup">
	<div class="container">
		<div class="title _text-center">Change your pasword</div>

		<form class="form js-init" method="post" data-ajax="hidden/response/answer.php">

			<div class="form-group">
				<input class="form-group__input" type="password" required="" placeholder="Old password" name="password-old">
			</div>

			<div class="form-group">
				<input class="form-group__input" type="password" required="" placeholder="New password" name="password-in">
			</div>

			<div class="form-group">
				<input class="form-group__input" type="password" required="" placeholder="Repeat password" name="password-equal" data-rule-equalto="[name=&quot;password-in&quot;]">
			</div>

			<div class="grid _justify-center _mt-lg">
				<button type="submit" class="button ">
					<span> Register </span>
				</button>
			</div>
		</form>
	</div>
</div>
