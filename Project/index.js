let button = document.querySelectorAll('.catalogLink');

let segway = document.querySelector('.segway');
let gyroscooter = document.querySelector('.gyroscooter');
let electricscooter = document.querySelector('.electricscooter');
let masi = [segway, gyroscooter,  electricscooter];



for( let buttons of button){
	buttons.onclick = function(){
		if (buttons.dataset.filter === 'giro'){
			masi[0].classList.add('cataloghide');
			masi[1].classList.remove('cataloghide');
			masi[2].classList.add('cataloghide');
			
		}else if(buttons.dataset.filter === 'electro'){
			masi[0].classList.add('cataloghide');
			masi[1].classList.add('cataloghide');
			masi[2].classList.remove('cataloghide');
		}else if(buttons.dataset.filter === 'sig'){
			masi[0].classList.remove('cataloghide');
			masi[1].classList.add('cataloghide');
			masi[2].classList.add('cataloghide');
		}else if(buttons.dataset.filter === 'all'){
			masi[0].classList.remove('cataloghide');
			masi[1].classList.remove('cataloghide');
			masi[2].classList.remove('cataloghide');
		}
		
	};
	
};

//Создаю кнопку для прокрутки вверх
let arrow = document.querySelector('.str');

window.onscroll = function(){
	if(window.pageYOffset >= 2800){
		arrow.classList.remove('cataloghide');
	}else{
		arrow.classList.add('cataloghide');
	};
};
arrow.onclick = function(){
	window.scrollTo(0,0);

};