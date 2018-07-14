'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------
let svgSprite = window.svgSprite;

// ----------------------------------------
// Private
// ----------------------------------------

function build(nameSpace,list){
	let $container = $(`[data-more-ns=${nameSpace}]`)

	switch (nameSpace) {
		case 'actions':
			$container.append(addItems(list, templateActions));
			break;

		case 'history':
			$container.append(addItems(list, templateHistory));
			break;

		case 'historyAccount':
			$container.append(addItems(list, templateHistoryAccount));
			break;

		default:
			console.warn('Укажите тип , в атрибуте data-modal');
	}
}

function addItems (obj, templateType) {
	let arr = [];

	obj.forEach(function (el, i) {
		let item = templateType(el);
		arr.push(item);
	});
	return arr;
}


function templateActions(el) {
	return `
		<div class="actions__item">
			<div class="actions__date">
				<span>${el.date}</span>
			</div>
			<div class="actions__cnt">
				${el.text}
			</div>
		</div>
	`;
}

function templateHistory(el) {
	return `
		<div class="board__tr">
			<div class="board__td board__td--logo">
				<img src="${el.img}" alt="">
			</div>
			<div class="board__td board__td--id">
				<span>${el.id}</span>
			</div>
			<div class="board__td board__td--info">
				<span>${el.description}</span>
			</div>
			<div class="board__td board__td--cash">
				<span> ${el.price} $</span>
			</div>
			<div class="board__td board__td--nav">
				<span>${el.date}</span>
			</div>
		</div>
	`;
}

function templateHistoryAccount(el) {
	return `
		<div class="board__tr">
			<div class="board__td board__td--logo">
				<img src="${el.img}" alt="">
			</div>
			<div class="board__td board__td--id">
				<span>${el.id}</span>
			</div>
			<div class="board__td board__td--info">
				<span>${el.description}</span>
			</div>
			<div class="board__td board__td--cash">
				
			</div>
			<div class="board__td board__td--nav">
				<span>${el.date}</span>
			</div>
		</div>
	`;
}
// ----------------------------------------
// Public
// ----------------------------------------
const loadMore = {

		defaultClass: {
			sendClass: '[data-more]'
		},

		init ($context = $(document), userConfig = {}) {
			let $this = this;
			this.$context = $context;

			this.config = $.extend(this,{}, this.defaultClass, userConfig);

			this.$context.on('click', this.config.sendClass, function () {
				let $el = $(this);
				let {url,nameSpace,count} = $el.data('more');

				$.ajax({
					url: url,
					type: 'POST',
					dataType: 'json',
					data: {
						count: count
					},
					success: function (data) {
						if (data.success){
							build(nameSpace,data.list);

							$el.data('more', $.extend(true, {}, $el.data('more'), {"count": `${data.count}`}));
						}
						
						if (data.empty){
							$el.hide();
						}

					},
					error: function (data, status, e) {
						alert('Error ' + e);

					}
				});

			});
		}
	}
// ----------------------------------------
// Exports
// ----------------------------------------

export default loadMore;
