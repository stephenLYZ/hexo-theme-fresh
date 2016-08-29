$(document).ready(function(){
	var $btn = $('.menu-toggle')
	var $navBar = $('.nav-bar')

	$btn.on('click',function(){
		$navBar.toggleClass('show')
	})
})