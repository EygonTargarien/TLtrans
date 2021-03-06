<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>

<div class="popup auction">
	<div class="title _text-center">Applaing to order #W53267Y65</div>
	<div class="grid grid--hspace-xl">
		<div class="gcell gcell--7">
			<div class="auction__timer">
				<div class="timer js-timer">
					<div class="timer__main">
						<div class="js-init" data-timer='{
					"timer":"60"
					}'></div>
						<div class="timer__status">Starting bid</div>
						<div class="timer__price">
							<span>325</span> USD</div>
					</div>

					<!--@TODO timer__info step 1-->
					<div class="timer__info">
						<div class="timer__form">
							<button class="button js-timerStart">
								<span>aplay</span>
							</button>
						</div>
						<div class="timer__describe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores earum harum nemo officia optio quae qui quod temporibus voluptate?</div>
					</div>

				</div>
			</div>
			<div class="auction__description">
				<div class="auction__table">
					<div class="auction__tr">
						<div class="auction__td">Description</div>
						<div class="auction__td">Lorem ipsum dolor sit amet.</div>
					</div>
					<div class="auction__tr">
						<div class="auction__td">Starting cashout</div>
						<div class="auction__td">
							<span>5 EUR</span>
						</div>
					</div>
					<div class="auction__tr">
						<div class="auction__td">Minimum bid</div>
						<div class="auction__td">3 EUR</div>
					</div>

					<div class="auction__tr">
						<div class="auction__td">Description</div>
						<div class="auction__td">Lorem ipsum dolor sit amet.</div>
					</div>

					<div class="auction__tr">
						<div class="auction__td">Description</div>
						<div class="auction__td">Lorem ipsum dolor sit amet.</div>
					</div>

				</div>
			</div>
		</div>
		<div class="gcell gcell--5">
			<div class="auction__info">
				<div class="auction__info-block">Keep in mind that we are a real company, R2Pleasent Gold Inc exists since 2007, we have the right to sue anyone that attempts to the disrupt normal company service that is directly related to loss of company profit.</div>
				<div class="auction__info-block">
					<span>Never use scripts</span> or
					<span>3rd party tools</span> in a customer account,
					<span>Never share the account with anyone</span> else, regardless of the situation.
				</div>
				<div class="auction__info-block">
					<span>Do not attempt to contact a customer</span> and give him a lower price or a
					<span>private service</span>, we give customers who report boosters free division orders.
				</div>
				<div class="auction__info-block">You need to play at least
					<span>3 games after locking</span> an order, and
					<span>10 minimum per day</span> , without any excuses
					<span>OR WE WILL REMOVE CASHOUT FROM YOUR BALANCE</span>. If you are not sure about it, DO NOT Bid!
				</div>
			</div>
		</div>
	</div>
</div>
