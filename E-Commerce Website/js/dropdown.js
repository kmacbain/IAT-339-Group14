/* All code except those portions with comments indicating otherwise are from the SFU class IAT 339, taught by Paul Brokenshire, in the winter semester of 2021*/

'use strict';

// Find every dropdown menu list in the HTML
const all_menus = document.querySelectorAll('.dropdown_wrapper');

//Running dropdown script + listener on every instance of .dropdown_wrapper that exists

//Help understanding how to step through each drop down menu list by first converting the nodelist to an array and then returning each item and their index from my wife, Bri MacBain and from the follwing tutorials:
//https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
//https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Array.from(all_menus).forEach((element, index) => {

	// Assign each element in the array to the variable menu
	let menu = element;

	// Set each item in the menu list to hidden
	menu.classList.add('hidden');

	// Accessability settings when menu is hidden
	menu.setAttribute('aria-hidden', 'true');
	menu.setAttribute('aria-labelledby', 'menu-toggle');

	// Take the first item in the menu and set it to variable menuFirstItem
	let menuFirstItem = element.querySelector('a:first-of-type');

	// Toggle hidden menu on and off when clicking menu title (ie 'office')
	let menuToggle = menu.parentNode;

	//Accessability settings for when menu is displayed
	menuToggle.setAttribute('aria-label', 'menu-toggle');
	menuToggle.setAttribute('aria-controls', 'menu');
	menuToggle.setAttribute('aria-expanded', 'false');


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

});

