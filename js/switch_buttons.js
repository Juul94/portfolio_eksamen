// JavaScript Document
		
var switchdiv = 'shown';

function switchDiv(switchdiv){

	if(switchdiv == 'shown'){

		document.getElementById('remake').setAttribute('style','display:none;');
  document.getElementById('oprindelig').removeAttribute('style');   
			switchdiv = 'hidden';
	}

	else {
		 document.getElementById('oprindelig').setAttribute('style','display:none;');
 document.getElementById('remake').removeAttribute('style'); 
		 switchdiv = 'shown';
	}
};

var switchButton            = document.querySelector('.switch-button');
var switchBtnRight          = document.querySelector('.switch-button-case.right');
var switchBtnLeft           = document.querySelector('.switch-button-case.left');
var activeSwitch            = document.querySelector('.btn_active');

function switchLeft(){
	switchBtnRight.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left                         = '0%';
}

function switchRight(){
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	activeSwitch.style.left                         = '50%';
}

switchBtnLeft.addEventListener('click', function(){
	switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
	switchRight();
}, false);
		