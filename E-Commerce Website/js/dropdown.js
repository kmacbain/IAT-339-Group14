/* All code except those portions with comments indicating otherwise are from the SFU class IAT 339, taught by Paul Brokenshire, in the winter semester of 2021*/

'use strict';

// object.method();
// Form arguments take

console.log('Hello World, Javascript is online');


// var menu = document.querySelector ('#office');
// var is also an option for the variable, but let is better

let menu = document.querySelector ('#office');

menu.classList.add('hidden');

menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-toggle');

let menuFirstItem = document.querySelector('#office a:first-of-type');
let header = document.querySelector('header');


let menuToggle = document.createElement('button');


menuToggle.classList.add('button');

menuToggle.setAttribute('id', 'menu-toggle');

menuToggle.innerHTML = "Menu";

menuToggle.setAttribute('aria-label', 'Menu');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');

header.insertBefore(menuToggle, menu);


// Adding the interactive part that hides and shows for menuToggle

menuToggle.addEventListener('click', 
	function(){
		console.log('menuToggle has been clicked.');

		if(menu.classList.contains('hidden')){
			console.log('Menu is hidden, showing the menu');

			menu.classList.remove('hidden');

			// Accessibility controls
			menu.setAttribute('aria-hidden', 'false');
			menu.setAttribute('aria-expanded', 'true');
			menuFirstItem.focus();
		}else{
			console.log('Menu is shown, hiding the menu');

			menu.classList.add('hidden');

			menu.setAttribute('aria-hidden', 'true');
			menu.setAttribute('aria-expanded', 'false');
		}
	}


	);