function switchClass() {
  if (window.innerWidth > 767) {
    return 3;
  } else {
    return 1;
  }
}

function PerMove() {
  if (window.innerWidth > 767) {
    return 4;
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

  if (window.innerWidth > 1157) {
    for (const splide of splideSection) {
      splide.style.display = 'none';
    }
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1157) {
      optionsSplide.perPage = switchClass();
      optionsSplide.perMove = PerMove();
      splide.destroy();
      splide = new Splide('.splide', optionsSplide).mount();

      optionsSplide1.perPage = switchClass();
      optionsSplide1.perMove = PerMove();
      splide1.destroy();
      splide1 = new Splide('#slider1', optionsSplide1).mount();

      optionsSplide2.perPage = switchClass();
      optionsSplide2.perMove = PerMove();
      splide2.destroy();
      splide2 = new Splide('#slider2', optionsSplide2).mount();

      optionsSplide3.perPage = switchClass();
      optionsSplide3.perMove = PerMove();
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

const moviesButton = document.querySelector('.movies-button');
const moviesList = document.querySelector('.movies-list-more');
const watchButton = document.querySelector('.hero-button');

moviesButton.addEventListener('click', () => {
  moviesList.classList.remove('hidden');
  moviesList.classList.add('visible');
  moviesButton.classList.add('delete');
});

watchButton.addEventListener('click', event => {
  const instance = basicLightbox.create(`
    <video controls>
        <source src="https://rr2---sn-ab5sznzy.googlevideo.com/videoplayback?expire=1710019382&ei=1n7sZb-TL5Ct_9EPk4yRoAc&ip=64.43.118.2&id=o-ACoauxLVfa0BjECTN94bebZ-AkN2BABCSLDNPBsxCPrA&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=ja&mm=31%2C26&mn=sn-ab5sznzy%2Csn-p5qddn7z&ms=au%2Conr&mv=m&mvi=2&pl=22&initcwndbps=38623750&spc=UWF9f1Xh8_uk9mVyWopBtlBXyOnZrOOeIQjf77Zep-lXU0g&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=285.024&lmt=1702036992547439&mt=1709997445&fvip=3&fexp=24007246&c=ANDROID&txp=5308224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAKIDQzB0NV6keBL1Lo28cqaiVonb-GDVGEXEh6I8PX3HAiAA_ScAIW6IHeEeCxPi-btT56YOOan8lqVYiUIVjBYEMQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=APTiJQcwRAIgASiJfkJzLSaKslcyr3ZwrMKh3iPIr-sQMPb6MqwP2_ACIAIB1ubXO1RTwLBRlLEuO04TQPXaLnNbvmHH1J4vaMh3&title=Opening%20Scene%20%7C%20Zack%20Snyder%27s%20Justice%20League%20(2021)%20Movie%20Clip%204K%20HDR">
    </video>
`);

  instance.show();
});

const tvShow = document.querySelector('.TvShow-list');
const movies = document.querySelector('.movies-list');
const moviesMore = document.querySelector('.movies-list-more');

moviesMore.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `
   <div class="film-modal">
   <button type="button" class="close-button">
            <svg class="svg-button" width="24" height="24">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>
      <div class="wrapper">
         <img class="film-img" src="${event.target.src}" alt="">

        <div class="text-wrapper"><p class="film-creater">Release date: 21.06.2005
Director: Lorem, ipsum dolor.
Distributor: Warner Bros. Pictures
Budget: 190 million USD
Casting Directors: Lytvynenko Dmytro
Cinematographer:Dolor sit amet
</p>
<p class="film-actors">Actors: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, odit velit! Dicta consequatur dolorum autem!</p></div>
</div>
      <p class="film-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur quod nobis totam voluptas reiciendis unde sapiente rem veniam, enim sit cum nisi sint distinctio delectus consectetur vero excepturi vel corrupti a nemo debitis incidunt doloribus. Temporibus reiciendis amet assumenda, nobis vitae optio sint qui vero odio, obcaecati ut dolor!</p>
    <button type="button" class="hero-button">
                <svg class="play" width="12" height="16">
                  <use href="./images/symbol-defs.svg#icon-play"></use>
                </svg>
                Watch
              </button>
      </div>
`,
      {
        onShow: instance => {
          document.addEventListener('keydown', onKeyDown);
          instance.element().querySelector('.close-button').onclick =
            instance.close;
        },
      }
    );

    instance.show();

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keyDown', onKeyDown);
      }
    }
  }
});

movies.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `
   <div class="film-modal">
   <button type="button" class="close-button">
            <svg class="svg-button" width="24" height="24">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>
      <div class="wrapper">
         <img class="film-img" src="${event.target.src}" alt="">

        <div class="text-wrapper"><p class="film-creater">Release date: 21.06.2005
Director: Lorem, ipsum dolor.
Distributor: Warner Bros. Pictures
Budget: 190 million USD
Casting Directors: Lytvynenko Dmytro
Cinematographer:Dolor sit amet
</p>
<p class="film-actors">Actors: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, odit velit! Dicta consequatur dolorum autem!</p></div>
</div>
      <p class="film-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur quod nobis totam voluptas reiciendis unde sapiente rem veniam, enim sit cum nisi sint distinctio delectus consectetur vero excepturi vel corrupti a nemo debitis incidunt doloribus. Temporibus reiciendis amet assumenda, nobis vitae optio sint qui vero odio, obcaecati ut dolor!</p>
  <button type="button" class="hero-button">
                <svg class="play" width="12" height="16">
                  <use href="./images/symbol-defs.svg#icon-play"></use>
                </svg>
                Watch
              </button>
      </div>
`,
      {
        onShow: instance => {
          document.addEventListener('keydown', onKeyDown);
          instance.element().querySelector('.close-button').onclick =
            instance.close;
        },
      }
    );

    instance.show();

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keyDown', onKeyDown);
      }
    }
  }
});

tvShow.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `
   <div class="film-modal">
   <button type="button" class="close-button">
            <svg class="svg-button" width="24" height="24">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>
      <div class="wrapper">
         <img class="film-img" src="${event.target.src}" alt="">

        <div class="text-wrapper"><p class="film-creater">Release date: 21.06.2005
Director: Lorem, ipsum dolor.
Distributor: Warner Bros. Pictures
Budget: 190 million USD
Casting Directors: Lytvynenko Dmytro
Cinematographer:Dolor sit amet
</p>
<p class="film-actors">Actors: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, odit velit! Dicta consequatur dolorum autem!</p></div>
</div>
      <p class="film-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur quod nobis totam voluptas reiciendis unde sapiente rem veniam, enim sit cum nisi sint distinctio delectus consectetur vero excepturi vel corrupti a nemo debitis incidunt doloribus. Temporibus reiciendis amet assumenda, nobis vitae optio sint qui vero odio, obcaecati ut dolor!</p>

 <button type="button" class="hero-button">
                <svg class="play" width="12" height="16">
                  <use href="./images/symbol-defs.svg#icon-play"></use>
                </svg>
                Watch
              </button>

    </div>
`,
      {
        onShow: instance => {
          document.addEventListener('keydown', onKeyDown);
          instance.element().querySelector('.close-button').onclick =
            instance.close;
        },
      }
    );

    instance.show();

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keyDown', onKeyDown);
      }
    }
  }
});
