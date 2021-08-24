const initLoader = () => {
  const container = document.querySelector('.loader');
  const btn = document.querySelector('.loader__btn');

  function onShowContent() {
    const content = document.querySelector('.home-page');
    const header = document.querySelector('.header');

    container.classList.add('loader--hidden');
    content.classList.add('home-page--active');
    header.classList.add('header--active');
  }

  window.addEventListener('keypress', function (evt) {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      onShowContent();
    }
  });

  btn.addEventListener('click', onShowContent);

  const breakpoint = window.matchMedia('(max-width:768px)');
  const modal = document.querySelector('.modal');

  if (breakpoint.matches === true) {
    container.addEventListener('click', function () {
      onShowContent();
      modal.classList.add('modal--active');
    });

    modal.addEventListener('click', function () {
      modal.classList.remove('modal--active');
    });
  }

};

export {
  initLoader
};
