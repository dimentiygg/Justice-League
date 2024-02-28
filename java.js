const r = document.querySelector('.splidez')
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'slide',
    focus: 'center',
    perPage: 1,
    perMove: 1,
  }).mount();



  var splide = new Splide('#slider1', {
    type: 'slide',
    focus: 'center',
    perPage: 1,
    perMove: 1,
  }).mount();


  var splide = new Splide('#slider2', {
    type: 'slide',
    focus: 'center',
    perPage: 1,
    perMove: 1,

  }).mount();


  var splide = new Splide('#slider3', {
    type: 'slide',
    focus: 'center',
    perPage: 1,
    perMove: 1,
    height:'15rem'
  }).mount();

});


