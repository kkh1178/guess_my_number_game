'use strict';

// Select a class name of message
// document.querySelector('message');
// console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.message').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log((document.querySelector('.guess').value = 23));

// Create a variable with a secret number between 1-20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Set the score to 20 in the code and not in the DOM; Not depending on the
// DOM to hold our data. We want the data to always available in our code and
// not just depend on the DOM.
let score = 20;

// Setting the high score value
let highScore = 0;

// Look at the "check" button. "Guess" is the players guess and the following
// if/else statement will determine the message displayed
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If guess isn't a number, return not a valid number
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid number!';
    // If guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! You Win!';
    // change the background color of the body of the page when correct number is guessed.
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Make the number appear in place of the ? and make it bigger
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Setting the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess >= secretNumber) {
    // Subtract from the score for wrong answer and reset on the DOM when score
    // is above 0
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost! Please try again';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess <= secretNumber) {
    // Subtract from the score for wrong answer and reset on the DOM when the score
    // is above zero
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost! Please try again';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Re-initializing the game
document.querySelector('.again').addEventListener('click', function () {
  // resetting the score to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  // resetting the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Resetting the message field
  document.querySelector('.message').textContent = 'Start guessing...';
  // resetting the answer field
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // Resetting the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // resetting the input
  document.querySelector('.guess').value = '';
});
