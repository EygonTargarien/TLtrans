<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup popup--ms">
	<div class="container">

		<div class="title title--size-h3">Callback</div>
		<form class="form js-init" method="post" data-ajax="./hidden/response/demo.json">
			<div class="form-group">
				<input class="form-group__input" type="email" required="" placeholder="email" name="email">

			</div>

			<div class="form-group">
				<input class="form-group__input js-init" type="tel" required="" data-phonemask="universal" data-rule-minlength="3" data-rule-validdata="true" data-msg-validdata="Укажите полный номер телефона" value="+380" placeholder="phone mask" name="phone-mask">

			</div>

			<div class="form-group">
				<textarea class="form-group__textarea" required="" placeholder="message" name="message" data-rule-minlength="20"></textarea>

			</div>

			<div class="form-group">
				<button class="button" type="submit">
					<span>Отправить</span>
				</button>

				<button class="button" type="reset">
					<span>Сбросить</span>
				</button>

			</div>
		</form>

	</div>
</div>
