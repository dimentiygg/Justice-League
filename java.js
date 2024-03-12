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
<iframe width="560" height="315" src="https://www.youtube.com/embed/3cxixDgHUYw?si=Z-7ft7WMK-re-RB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

  instance.show();
});

const tvShow = document.querySelector('.TvShow-list');
const movies = document.querySelector('.movies-list');
const moviesMore = document.querySelector('.movies-list-more');
const splideModal = document.querySelectorAll('.splide__list');

splideModal[1].addEventListener('click', event => {
  console.log(1);
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `
     <div class="film-modal">
<button type="button" class="close-button">
            <svg class="svg-button" width="24" height="24">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>      <div class="wrapper">
         <img class="film-img" src="${event.target.src}" alt="">

        <div class="text-wrapper">
          <p class="film-creater">Release date: 21.06.2005
Director: Lorem, ipsum dolor.
Distributor: Warner Bros. Pictures
Budget: 190 million USD
Casting Directors: Lytvynenko Dmytro
Cinematographer:Dolor sit amet
</p>
</div>



    </div>
    
<div class="box">
<p class="film-actors">Actors: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, odit velit! Dicta consequatur dolorum autem!</p>

        <p class="film-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur quod nobis totam voluptas reiciendis unde sapiente rem veniam, enim sit cum nisi sint distinctio delectus consectetur vero excepturi vel corrupti a nemo debitis incidunt doloribus. Temporibus reiciendis amet assumenda, nobis vitae optio sint qui vero, obcaecati ut dolor!</p>
     
</div>
<button type="button" class="hero-button modal">
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
splideModal[0].addEventListener('click', event => {
  console.log(1);
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `
     <div class="film-modal">
<button type="button" class="close-button">
            <svg class="svg-button" width="24" height="24">
              <use href="./images/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>      <div class="wrapper">
         <img class="film-img" src="${event.target.src}" alt="">

        <div class="text-wrapper">
          <p class="film-creater">Release date: 21.06.2005
Director: Lorem, ipsum dolor.
Distributor: Warner Bros. Pictures
Budget: 190 million USD
Casting Directors: Lytvynenko Dmytro
Cinematographer:Dolor sit amet
</p>
</div>



    </div>
    
<div class="box">
<p class="film-actors">Actors: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, odit velit! Dicta consequatur dolorum autem!</p>

        <p class="film-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur quod nobis totam voluptas reiciendis unde sapiente rem veniam, enim sit cum nisi sint distinctio delectus consectetur vero excepturi vel corrupti a nemo debitis incidunt doloribus. Temporibus reiciendis amet assumenda, nobis vitae optio sint qui vero, obcaecati ut dolor!</p>
     
</div>
<button type="button" class="hero-button modal">
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
