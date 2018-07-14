'use strict';

/**
 * template name
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------
import 'magnific-popup'
import './magnific-popup/mfp-extend.scss'

// ----------------------------------------
// Private
// ----------------------------------------
function showError(){
	let $error = $('.js-error');

	$('.js-user').slideUp(300);
	$error.addClass('has-active');
	setTimeout(function(){
		$error.removeClass('has-active');
	},2500)
}

function addItems (obj, templateType) {
	let arr = [];

	obj.forEach(function (el, i) {
		let item = templateType(el);
		arr.push(item);
	});
	return arr.join('');
}

//build
function includeEmpty($container){
	let inclCnt = `
		<div class="user__repo-empty">
			<span>user doesn't have repositories</span>
		</div>
	`;

	$container.html(inclCnt)
}

function buildRipoList($container,list){
	let $list = addItems(list, templateRepoItem);

	$container.html(`
	<ul class="user__repo-list">
			${$list}						
	</ul>
	`);
}

function templateRepoItem(el){
	// console.log(el);
	return `
		<li class="user__repo-item js-repoItem" data-url="${el.url}">${el.name}</li>
	`;
}

function buildUserCart(user){
	let date = user.created_at;
	let name = user.name ? `<div class="user__name">${user.name}</div>` : '';
	let mail = user.email ? `<div class="user__mail">${user.email}</div>` : '';
	let company = user.company ? `<div class="user__company">${user.company}</div>` : '';


	let cart =`
		<div class="user__cart">
			<div class="user__img">
				<img src="${user.avatar_url}" alt="">
				<div class="user__folowCount">
					Followers
					<span>${user.followers}</span>
				</div>
			</div>
			<div class="user__cnt">
				<div class="user__head">
					<div class="user__login">${user.login}</div>
					<div class="user__date">${date}</div>
				</div>
				<div class="user__about">
					${name}   
					${mail}   
					${company}   
				</div>
				
			</div>
		</div>
	`;

	$('.js-userCart').html(cart);
}


function buildInfoRepo(repo){
	let cnt = `
		<div class="popup repo">
			<div class="repo__head">
				<div class="repo__name">${repo.full_name}</div>
				<div class="repo__date">${repo.created_at}</div>
				<div class="repo__description">${repo.description}</div>
				<div class="repo__option">
					<div class="repo__item">forks <span>${repo.forks}</span></div>
					<div class="repo__item">issues <span>${repo.open_issues}</span></div>
				</div>
			</div>
		</div>  
	`;


	$.magnificPopup.open({
		items: {
			src: cnt
		},
		type: 'inline'
	});

	$(document).on('click','.js-fork',function(){
		let urlFork = $(this).attr('data-fork');
		console.log(urlFork);
		$.ajax({
			url: urlFork,
			type: 'POST',
			dataType: 'json',
			data: null,
			success: function (data) {
				console.log(data);
			},
			error: function (data, status, e) {
				alert('Error ' + e);
			}
		});

	});


}
// ----------------------------------------
// Public
// ----------------------------------------
const calc = {
	defaultConfig: {
		wrapClass: '[data-github]'
	},

	init ($container = $(document), userConfig = {}) {
		let $this = this;
		this.$container = $container;
		this.config = $.extend(this, {}, this.defaultClass, userConfig);

		this.$container.on('click','.js-area',function(){
			$(this).select()
		});



		this.$container.on('click','.js-btn',function(){
			let $btn = $(this),
				$area = $('.js-area'),
				$repo = $('.js-repo');
			let user = $area.val();

			if(!user) {
				showError();
				return false;
			}


			$.ajax({
				url: `https://api.github.com/users/${user}`,
				type: 'GET',
				dataType: 'json',
				data: null,
				success: function (user) {

					buildUserCart(user);

					$.ajax({
						url: user.repos_url,
						type: 'GET',
						dataType: 'json',
						data: null,
						success: function (repos) {
							if (!repos.length){
								includeEmpty($repo);
								return false;
							}
							
							buildRipoList($repo,repos);

							$('.js-user').slideDown(300);
						},
						error: function (data, status, e) {
							alert('Error ' + e);
						}
					});

				},
				error: function (data, status, e) {
					showError();

				}
			});

			
		});

		this.$container.on('click','.js-repoItem',function(){
			let $item = $(this);
			let urlRepo = $item.data('url');

			$.ajax({
				url: urlRepo,
				type: 'GET',
				dataType: 'json',
				data: null,
				success: function (repo) {
					console.log(repo);
					buildInfoRepo(repo)
				},
				error: function (data, status, e) {
					alert('Error ' + e);
				}
			});
		})
	}


}
// ----------------------------------------
// Exports
// ----------------------------------------

export default calc;
