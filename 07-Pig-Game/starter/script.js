'use strict';
// selecting element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let current, active, scores, playing;

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  let current = 0;
  let active = 0;
  const scores = [0, 0];
  let playing = true;
  dice.classList.add('hidden');
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${active}`).textContent = 0;
  current = 0;
  active = active === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
// roll dice functionallity
btnroll.addEventListener('click', function () {
  // 1 generate random dice
  if (playing) {
    const random = Math.floor(Math.random() * 6) + 1;
    // 2 display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${random}.png`;
    // 3 check the dice if 1 switch to next plyer
    if (random !== 1) {
      current += random;
      document.querySelector(`#current--${active}`).textContent = current;
    } else {
      // when the dice is 1
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  // add current score to active score
  if (playing) {
    scores[active] += current;
    document.querySelector(`#score--${active}`).textContent = 0;
    current = scores[active];
    // check if score is >= 100 finish the game
    if (scores[active] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
  // switch to the next player
});

btnnew.addEventListener('click', init);
