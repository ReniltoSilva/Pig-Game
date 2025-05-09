'use strict';

//STEP BY STEP
//1 - GENERATE RANDOM NUMBER WITH DICE ROLL DONE
////If number between 2 and 6
////1.1 - Add number to the current field DONE
////If number is 1
////1.2 - Current field resets to zero and change players turn. DONE
////If player presses hold btn
////1.3 - Save displayed number from the current field in a variable. DONE
////1.4 - Change players turn DONE
////1.5 - Do same functionalities for other player

//2 - CHECK WHICH PLAYER IS ACTIVE
////2.1 -

//BUTTONS FUNCTIONALITY
////NEW GAME: Reset the whole game back to zero.
////ROLL DICE: Generate random number from 1 to 6
////HOLD: Hold score value of each player

//Saved Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceField = document.querySelector('.dice');

const totalScoreFieldPZero = document.querySelector('#score--0');
const currentFieldPZero = document.querySelector('#current--0');
const playerZero = document.querySelector('.player--0');

const totalScoreFieldPOne = document.querySelector('#score--1');
const currentfieldPOne = document.querySelector('#current--1');
const playerOne = document.querySelector('.player--1');

//Current and Total Score for PlayerZero
diceField.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let totalScorePZero = 0;
let totalScorePOne = 0;

//Function to reset whole game
btnNew.addEventListener('click', function () {
  diceField.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  totalScoreFieldPZero.textContent = 0;
  currentFieldPZero.textContent = 0;
  totalScoreFieldPOne.textContent = 0;
  currentfieldPOne.textContent = 0;
  console.log('Game Reseted');
});

//Funtion to roll dice and generate random Number
btnRoll.addEventListener('click', function () {
  //Generate random number
  const dice = Math.ceil(Math.random() * 6);
  //Display Dice image on the screen
  diceField.classList.remove('hidden');
  diceField.src = `dice-${dice}.png`;
  console.log(`Roll: ${dice}`);

  //Check if 'dice' is 1 or not.
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    document.querySelector(`#score--${activePlayer}`).textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});

btnHold.addEventListener('click', function () {
  diceField.classList.add('hidden');
  document.querySelector(`#score--${activePlayer}`).textContent = currentScore;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  currentScore = 0;
  console.log(scores);
});

// // Function to change players turn
// function changePlayer() {
//   if (playerZero.classList.contains('player--active')) {
//     playerZero.classList.remove('player--active');
//     playerOne.classList.add('player--active');

//     totalScorePZero = rollDice;
//     currentFieldPZero.textContent = 0;
//   } else {
//     playerOne.classList.remove('player--active');
//     playerZero.classList.add('player--active');

//     totalScorePOne = rollDice;
//     currentfieldPOne.textContent = 0;
//   }
// }

// function playerZeroFN(rollDice) {
//   currentScore += rollDice;
//   currentFieldPZero.textContent = currentScore;
// }
// function playerOneFN(rollDice) {
//   currentScore += rollDice;
//   currentfieldPOne.textContent = currentScore;
// }
