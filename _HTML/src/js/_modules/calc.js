'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------
function build(key,$container, list){

	switch (key) {
		case 'division':
			$container.html(addItems(list, templateDivision));
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

function templateDivision(el){
	return `
		<li class="calc__elem" data-elem='{"key":"${el.key}","name":"${el.name}","img":"${el.img}"}'>													<span>${el.name}</span>
		</li>
	`;
}

//---
function resetArea($area){
	$area.data('key',null);
	$area.text($area.data('area').defaulName);
}

function getKey(arrKeys,saveValue){
	let key = '';
	arrKeys.forEach((el,i)=>{
		let $area = $(`[data-area][data-type=${el}]`);
		let dataKey = $area.data('key');

		if(dataKey){
			key += dataKey;
			console.log();
			calc.sendObj.services[saveValue] = [];
			// calc.sendObj.services[saveValue].push(dataKey);
		};

	});

	return key;
}

function getRangePrice(startRange, endRange){
	let priceList = calc.gameConfig.priceList;
	let startInex,endIndex;
	let amount = 0;

	priceList.forEach((el,i) =>{
		if (el.key == startRange) startInex = i;
		if (el.key == endRange) endIndex = i;
	});
	


	for (let i = startInex + 1; i <= endIndex; i++){
		amount += priceList[i].price;
	}
	return amount;

}

function writeResult(amount){
	$('.js-price').text(Math.round(amount));
	$('.js-priceOld').text(Math.round(amount * 0.9));
	$('.js-priceDM').text(Math.round(amount * 10));

	calc.sendObj.cost = Math.round(amount);
};

function optionUpdate(){
	let factor = 1;
	$('.js-factor').each((i,el) => {
		let $item = $(el);
		if ($item.prop('checked')){
			factor += +$item.val();
		}
	});
	return factor;
};
//check for errors
function checkAreas(){
	let status = true;

	$('[data-area]').each(function(i,el){
		let $item = $(el),
			$select = $item.closest('.js-select');
		let disabledStatus = $item.closest('[data-disabled]').hasClass('has-disabled') || false;

		if (!$item.data('key') && !disabledStatus){
			console.log('check status');
			$select.addClass('has-error');
			status = false;
		}
	});
	console.log(status);
	return status;
}
// ----------------------------------------
// Private
// ----------------------------------------
const calc = {
	defaultConfig: {
		wrapClass: '[data-calc]'
	},

	init ($container, userConfig = {}) {
		let $this = this;
		this.gameConfig = {};
		this.$container = $container;
		this.config = $.extend(this, {}, this.defaultClass, userConfig);
		this.sendObj = {
			"currency" : this.config.currency
		};


		$.ajax({
			url: this.config.gameConfigPath,
			type: 'POST',
			dataType: 'json',
			data: null,
			success: function (data) {
				$this.gameConfig = data;
			},
			error: function (data, status, e) {
				alert('Error ' + e);

			}
		});


		this.$container
		.on('click','[data-area]',function(){
			let $area = $(this),
				$select = $area.closest('.js-select'),
				$cnt = $select.find('.js-selectCnt');

			$cnt.addClass('has-active');
		})

		.on('mouseleave','.js-selectCnt',function(){
			$(this).removeClass('has-active');
		})

		.on('change','.js-factor',function(){
			let amount = $this.calculate($this.config.preset);
			amount *= (optionUpdate() + $('.js-discount').data('factor'));
			writeResult(amount);
		})

		.on('click','.js-discountBtn',function(){
			let $btn = $(this),
				$discountWrap = $btn.closest('.js-discount'),
				$discountArea = $discountWrap.find('.js-discountArea');


			$.ajax({
				url: $this.config.discountPath,
				type: 'POST',
				dataType: 'json',
				data: {
					dicountKey: $discountArea.val()
				},
				success: function (data) {
					console.log(data);
					if (data.success){
						$('.js-discount').data('factor',data.discountVal);
						$this.sendObj.discount = data.discoundKey;
						$('.js-discountSuccess').text(data.discountText).slideDown(300);
						$('.js-discountForm').slideUp(300);

						let amount = $this.calculate($this.config.preset);
						amount *= (optionUpdate() + $('.js-discount').data('factor'));
						writeResult(amount);
					} else {
						$('.js-discountError').slideDown();
						setTimeout(function(){
							$('.js-discountError').slideUp();
						},2500)
					}
				},
				error: function (data, status, e) {
					alert('Error ' + e);

				}
			});
		})

		.on('click','[data-elem]',function(){
			let $elem = $(this),
				$select = $elem.closest('.js-select'),
				$selectList = $select.closest('.js-selectList'),
				$cnt = $select.find('.js-selectCnt'),
				$img = $selectList.find('.js-img'),
				$area = $select.find('[data-area]');
			let elemConfig = $elem.data('elem');

			$area.text(elemConfig.name);
			$cnt.removeClass('has-active');
			$area.data('key',elemConfig.key);
			$select.removeClass('has-error');

			if (elemConfig.img){
				$img.attr('src',elemConfig.img);
			} else{
				$img.attr('src',$this.config.imgDefault);
			}


			let areaConfig = $area.data('area');
			if(areaConfig.openDisabled){
				areaConfig.openDisabled.forEach(function(el,i){
					let openList = $this.gameConfig.tier[elemConfig.key][el];
					let $disabledBlock = $selectList.find(`[data-disabled=${el}]`),
						$container = $disabledBlock.find(`.js-elemList`);

					resetArea($disabledBlock.find('[data-area]'));
					$disabledBlock.find('.js-select').removeClass('has-error');

					if (!openList){
						$disabledBlock.slideUp(300).addClass('has-disabled');
						$container.html();

						return false;
					}

					build(el, $container, openList);
					$disabledBlock.slideDown(300).removeClass('has-disabled');
				});
			}


			let amount = $this.calculate($this.config.preset);
			amount *= (optionUpdate() + $('.js-discount').data('factor'));

			if(!amount){
				$('.js-mainError').slideDown(300);
				$('.js-totalWrap').slideUp(300);
			} else {
				$('.js-mainError').slideUp(300);
				writeResult(amount);
				$('.js-totalWrap').slideDown(300);


			}
		})

		.on('click','.js-send',function(){
			if (!checkAreas()) return false;

			console.log($this.sendObj);
			//send param
		})
	},

	calculate(preset){
		let amount;

		switch (preset) {
			case 'lolLeagueBoosting':
				let currentKey = getKey(['currentTier','currentDivision'],'currentKey');
				let desiredKey = getKey(['desiredTier','desiredDevision'],'desiredKey');


				amount = getRangePrice(currentKey,desiredKey);
				break;
			default:
				console.warn('need preset');
		}

		return amount;
	}



}
// ----------------------------------------
// Public
// ----------------------------------------

// ----------------------------------------
// Exports
// ----------------------------------------

export default calc;
