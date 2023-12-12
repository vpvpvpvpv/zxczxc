let window_size = document.documentElement.clientWidth
window.addEventListener('DOMContentLoaded', function () {
	console.log(window_size)
	document.querySelector('.footer_logo').addEventListener('click', function () {
		console.log("apple")
		document.querySelector('#menu_footer').classList.toggle('is-active');
		document.querySelector('.container_footer').classList.toggle('footer-active');
		document.querySelector('.footer__columns').classList.toggle('f-opacity') 
		console.log(window.innerWidth)
	})
	// if( window.innerWidth >= 860 ){
		document.getElementById('btn_menu').addEventListener('click', function () {
			console.log("apple")
			document.querySelector('#menu').classList.toggle('is-active');
			document.querySelector('.menu__list').classList.toggle('h-opacity');
			document.querySelector('.header__menu').classList.toggle('h-opacity')
			document.querySelector('.menu_logo').classList.toggle('logo-active');
		})
	// } else {
		document.getElementById('btn_menu_adaptive').addEventListener('click', function () {
			console.log("qweqwe")
			document.querySelector('#menu_adaptive').classList.toggle('is-active');
			document.querySelector('.menu_logo').classList.toggle('logo-active');
			document.querySelector('.header__menu').classList.toggle('h-opacity')
			document.querySelector('.nav_list').classList.toggle('burger-active')
		})
	// }
})