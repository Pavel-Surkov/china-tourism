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

function openModal(modal, blocker) {
  modal.classList.add('modal_opened');
  document.documentElement.classList.add('is-locked');
  blocker.classList.add('blocker_opened');
}

function closeModal(modal, blocker) {
  modal.classList.remove('modal_opened');
  document.documentElement.classList.remove('is-locked');
  blocker.classList.remove('blocker_opened');
}

(function handleProgramModals() {
  const programItems = document.querySelectorAll('.program-item');
  const programModals = Array.from(document.querySelectorAll('.program-modal'));
  const programWrapper = document.querySelector('.program-wrapper');

  if (programItems.length && programModals.length && programWrapper) {
    programWrapper.addEventListener('click', (evt) => {
      const target = evt.target;
      const btn = target.closest('.program-item__btn');

      if (btn) {
        const modalId = btn.dataset.modal;
        const modal = programModals.find((modal) => modal.id === modalId);

        if (modal) {
          const blocker = document.querySelector('#blocker');
          openModal(modal, blocker);
        }
      }
    });
  }
})();

(function handleProgramModalsClose() {
  const programModals = Array.from(document.querySelectorAll('.program-modal'));

  if (programModals.length) {
    const blocker = document.querySelector('#blocker');

    const closeBtns = programModals.map((modal) =>
      modal.querySelector('.modal-close')
    );

    closeBtns.forEach((btn) =>
      btn.addEventListener('click', () => {
        console.log('a');
        const modal = btn.closest('.program-modal');

        if (modal) {
          closeModal(modal, blocker);
        }
      })
    );
  }
})();
