'use strict';

const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  allowTouchMove: false,
  navigation: {
    prevEl: '.hero-btn-prev',
    nextEl: '.hero-btn-next',
  },
});

(function handleMenu() {
  const menu = document.querySelector('#menu');
  const menuBtn = document.querySelector('#menu-btn');
  const menuClose = document.querySelector('#menu-close-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('menu_opened');
    document.documentElement.classList.add('is-locked');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu_opened');
    document.documentElement.classList.remove('is-locked');
  });
})();

Fancybox.bind('[data-fancybox="gallery"]', {});

(function handleProgramModals() {})();
