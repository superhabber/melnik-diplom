"use strict";

var btnMore = document.getElementById('more-pet-list');
var optionsSlider = {
  loop: false,
  margin: 0,
  responsiveClass: true,
  items: 1,
  nav: true,
  dots: true
};

function InitSliders() {
  var previous_sliders = document.querySelectorAll('.petition__slider-list');

  if (previous_sliders.length) {
    previous_sliders.forEach(function (element) {
      $(element).owlCarousel(optionsSlider);
    });
  }

  var sliders = document.querySelectorAll('.sliders');

  if (sliders.length) {
    sliders.forEach(function (element) {
      $(element).removeClass('sliders');
      $(element).addClass('petition__slider-list owl-carousel');
      $(element).owlCarousel(optionsSlider);
    });
  } else {
    console.debug('РЅРѕРІРёС… СЃР»Р°Р№РґРµСЂРѕРІ РЅРµС‚Сѓ');
  }
}

$(function () {
  InitSliders();
  console.debug('page petitions-new');
});