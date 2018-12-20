// JavaScript Document

var burger_menu = document.getElementById("nav_menu");
var cross_close = document.getElementById("cross_close");

$('.lower').click(function() {	
	burger_menu.classList.add("overlay");
	burger_menu.classList.add("overlay-hugeinc");
	
	cross_close.classList.add("block_element");
	document.body.style.overflow = "hidden";
})

$('.remove').click(function() {	
	burger_menu.classList.remove("overlay");
	burger_menu.classList.remove("overlay-hugeinc");
	
	cross_close.classList.remove("block_element");
	document.body.style.overflow = "auto";
})
