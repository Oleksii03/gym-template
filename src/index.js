const menuBtn = document.querySelector('.js-menu__btn');
const mobMenu = document.querySelector('.js-mob-menu');

menuBtn.addEventListener('click', onOpenMobMenu);

function onOpenMobMenu (e) {
  mobMenu.classList.toggle('is-visible');
}