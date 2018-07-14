<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup">
	<div class="container">
		<div class="title _text-center">checkout</div>

		<form class="checkout js-init" data-ajax="hidden/response/answer.php">
			<div class="checkout__block">
				<div class="title title--sm _text-center">Review Order</div>
				<div class="checkout__val">Value of this services Lorem ipsum dolor sit amet.</div>
			</div>

			<div class="checkout__type">
				<div class="title title--sm _text-center">Check your currency</div>
				<div class="checkout__checkWrap">
					<label class="checkout__check">
						<span>20.40 €</span>
						<input type="radio" name="payment" checked>
						<i>
							<svg viewBox="0 0 26 26" width="26" height="26">
								<use xlink:href="<?php echo HTML::svgSymbol( 'check' ); ?>"></use>
							</svg>

						</i>
					</label>

				</div>
			</div>
			<div class="checkout__footer">
				<div class="title title--sm _text-center">Everything's good? Go to pay</div>

				<div class="grid _justify-center _mb-lg">
					<a href="#" class="button">
						<span>Go to pay</span>
					</a>
				</div>
				<div class="checkout__img">
					<img src="<?php echo HTML::media( 'assets/css/static/pic/payment.jpg', false, true ); ?>" alt="">
					<a href="#" class="checkout__inf">
						If you are uncomfortable using the G2APAY service, click here.
					</a>
				</div>
			</div>
		</form>

	</div>
</div>
