'use strict'

const urls = [
  'airmax.png',
  'airmax-jump.png',
  'airmax-on-foot.png',
  'airmax-playground.png',
  'airmax-top-view.png',
]

const sliderPhoto = document.getElementById('slider');

let iter = 0;
sliderPhoto.src = `i/${urls[iter]}`;

function showSlider(){
  if (iter === urls.length) {
	iter = 0;
  }
  sliderPhoto.src = `i/${urls[iter]}`;
  iter += 1;
}

setInterval(showSlider, 5000)
