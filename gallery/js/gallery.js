'use strict'

const currentPhoto = document.getElementById('currentPhoto');
const urls = [
  ['i/breuer-building.jpg'],
  ['i/guggenheim-museum.jpg'],
  ['i/headquarters.jpg'],
  ['i/IAC.jpg'],
  ['i/new-museum.jpg'],
];
let iter = 0;
currentPhoto.src = urls[iter];


buttonClick {

  if (this.id === 'prevPhoto') {
	  iter === 0 ? iter = urls.length - 1: iter -= 1;
  }

  else if (this.id === 'nextPhoto') {
	  (iter === urls.length - 1) ? iter = 0 : iter += 1;
  }
  	
  currentPhoto.src = urls[iter];
	
}


const prevPhoto = document.getElementById('prevPhoto');
const nextPhoto = document.getElementById('nextPhoto');

prevPhoto.onclick = buttonClick;
nextPhoto.onclick = buttonClick;