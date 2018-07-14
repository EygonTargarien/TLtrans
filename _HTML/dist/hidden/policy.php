<?php if (!defined('HOST')) { define('HOST', '../../../'); } $hiddenFolder = ''; require_once($hiddenFolder . 'HTML.php'); use Core\HTML;  if (!function_exists('__')) { require_once($hiddenFolder . 'i18n/I18n.php'); \I18n::lang('en'); } ?>
<div class="popup popup--wysiwyg">
	<div class="container">
		<div class="title _text-center">Policy </div>

		<div class="wysiwyg _mb-lg">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi doloribus eius enim eos eum inventore molestiae molestias nam numquam odit quam quod repellendus rerum ullam velit, voluptas. Enim, ex!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores eos laboriosam minima ut. Accusantium consequuntur deleniti et nisi porro quas rem repudiandae! Asperiores consequuntur error eum harum labore nemo nesciunt odio perferendis porro voluptates! Accusamus, delectus error impedit inventore ipsam laborum laudantium odio placeat porro provident, ratione, tenetur voluptates.</p>
		</div>

		<div class="grid _justify-center">
			<div class="button js-init" data-mfp="ajax" data-mfp-src="hidden/register.php">
				<span>Back to register</span>
			</div>
		</div>

	</div>
</div>
