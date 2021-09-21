'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');
const openmodal = document.querySelectorAll('.show-modal');
console.log(openmodal);
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', open);
}

closemodal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidde')) {
      close();
    }
  }
});
