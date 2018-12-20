// JavaScript Document

/*
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		header.style.backgroundColor = "white";
		header.style.borderBottom = "1px solid orange";
		header.classList.add("transition");
	}

	else {
		header.classList.remove("sticky");
		header.style.background = "none";
		header.style.borderBottom = "none";
		header.classList.remove("transition");
	}
}

*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
	{
		document.getElementById("header").style.top = "0";
		header.style.backgroundColor = "white";
		header.style.borderBottom = "1px solid orange";
		header.classList.add("transition");
	} 

	else {
		document.getElementById("header").style.top = "0";
		header.style.background = "none";
		header.style.borderBottom = "none";
	}
}