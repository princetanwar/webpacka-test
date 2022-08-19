import _ from 'lodash';
import printMe from './print.js';

import './style.css'
import Icon from './myholiday_logo.svg';
import data from './data.json'

function component() {
	const element = document.createElement('div');
	element.classList.add('hello');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	
	
	
	const btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	
	element.appendChild(btn);



	// Lodash, now imported by this script
      

	 // Add the image to our existing div.
	 const myIcon = new Image();
	 myIcon.src = Icon;
       
	 element.appendChild(myIcon);

	return element;
      }
      
      document.body.appendChild(component());
      console.log(data)