function switchClass() {
  if (window.innerWidth > 767) {
    return 3;
  } else {
    return 1;
  }
}

function PerMove() {
  if (window.innerWidth > 767) {
    return 5;
  } else {
    return 1;
  }
}

const r = document.querySelector('.splidez');
const splideSection = document.querySelectorAll('.splide');
document.addEventListener('DOMContentLoaded', function () {
  var optionsSplide = {
    type: 'slide',
    focus: 'center',
    perPage: switchClass(),
    perMove: PerMove(),
  };

  var splide = new Splide('.splide', optionsSplide).mount();

  var optionsSplide1 = Object.assign({}, optionsSplide, {
    perPage: switchClass(),
    perMove: PerMove(),
  });

  var splide1 = new Splide('#slider1', optionsSplide1).mount();

  var optionsSplide2 = Object.assign({}, optionsSplide, {
    perPage: switchClass(),
    perMove: PerMove(),
  });

  var splide2 = new Splide('#slider2', optionsSplide2).mount();

  var optionsSplide3 = Object.assign({}, optionsSplide, {
    perPage: switchClass(),
    perMove: PerMove(),
    height: '15rem',
  });

  var splide3 = new Splide('#slider3', optionsSplide3).mount();

  console.log(splide3);

  if (window.innerWidth > 1157) {
    for (const splide of splideSection) {
      splide.style.display = 'none';
    }
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1157) {
      optionsSplide.perPage = switchClass();
      optionsSplide.perMove = switchClass();
      splide.destroy();
      splide = new Splide('.splide', optionsSplide).mount();

      optionsSplide1.perPage = switchClass();
      optionsSplide1.perMove = switchClass();
      splide1.destroy();
      splide1 = new Splide('#slider1', optionsSplide1).mount();

      optionsSplide2.perPage = switchClass();
      optionsSplide2.perMove = switchClass();
      splide2.destroy();
      splide2 = new Splide('#slider2', optionsSplide2).mount();

      optionsSplide3.perPage = switchClass();
      optionsSplide3.perMove = switchClass();
      splide3.destroy();
      splide3 = new Splide('#slider3', optionsSplide3).mount();
    }
    if (window.innerWidth > 1157) {
      for (const splide of splideSection) {
        splide.style.display = 'none';
      }
    }
  });
});
