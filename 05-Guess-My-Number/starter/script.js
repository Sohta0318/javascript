'use strict';
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} in ${i + 1}day ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);

let seacreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    display('No Number');
  } else if (guess === seacreatNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    display('Correct Number');
    document.querySelector('.number').textContent = seacreatNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guss !== seacreatNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      display(guess < seacreatNumber ? 'Too Low' : 'Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost';
      display('You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// } else if (guess < seacreatNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Lost';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess > seacreatNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Lost';
//     document.querySelector('.score').textContent = 0;
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  seacreatNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  display('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
