'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const checkElement = document.querySelector('.check');
const guessElement = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const againElement = document.querySelector('.again');
const hightScoreElement = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



checkElement.addEventListener('click', function () {
  const guess = Number(guessElement.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;

    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      hightScoreElement.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

againElement.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  guessElement.value = '';

  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});