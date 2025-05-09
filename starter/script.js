'use strict';

//STEP BY STEP
//1 - GENERATE RANDOM NUMBER WITH DICE ROLL DONE
////If number between 2 and 6
////1.1 - Add number to the current field DONE
////If number is 1
////1.2 - Current field resets to zero and change players turn.
////If player presses hold btn
////1.3 - Save displayed number from the current field in a variable. DONE
////1.4 - Change players turn

//2 - CHECK WHICH PLAYER IS ACTIVE
////2.1 -

//BUTTONS FUNCTIONALITY
////NEW GAME: Reset the whole game back to zero.
////ROLL DICE: Generate random number from 1 to 6
////HOLD: Hold score value of each player

//Saved Elements
const diceField = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', changePlayer);
const currentFieldPZero = document.querySelector('#current--0');
const currentfieldPOne = document.querySelector('#current--0');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');

//Current and Total Score for PlayerZero
let currentScorePZero = 0;
let totalScorePZero = 0;

//Current and Total Score for Player One
let currentScorePOne = 0;
let totalScorePOne = 0;

//Function to generate random dice number
btnRollDice.addEventListener('click', () => {
  const rollDice = Math.ceil(Math.random() * 6);
  displayDiceValue(rollDice);
});

function displayDiceValue(rollDice) {
  switch (rollDice) {
    case 1:
      diceField.src = 'dice-1.png';
      currentScorePZero = 0;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 1 - YOU LOST YOUR POINTS`);
      changePlayer();
      break;
    case 2:
      diceField.src = 'dice-2.png';
      currentScorePZero += rollDice;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 2`);
      break;
    case 3:
      diceField.src = 'dice-3.png';
      currentScorePZero += rollDice;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 3`);
      break;
    case 4:
      diceField.src = 'dice-4.png';
      currentScorePZero += rollDice;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 4`);
      break;
    case 5:
      diceField.src = 'dice-5.png';
      currentScorePZero += rollDice;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 5`);
      break;
    case 6:
      diceField.src = 'dice-6.png';
      currentScorePZero += rollDice;
      currentFieldPZero.textContent = currentScorePZero;
      console.log(`Current score: ${currentScorePZero}`);
      console.log(`Number: 6`);
      break;
  }
}

//Function to change players turn
function changePlayer() {
  if (playerZero.classList.contains('player--active')) {
    playerZero.classList.remove('player--active');
    playerOne.classList.add('player--active');
    console.log('Class removed from P Zero');
    console.log('Player ONE ACTIVE');
  } else {
    playerOne.classList.remove('player--active');
    playerZero.classList.add('player--active');
    console.log('Class removed from P One');
    console.log('Player ZERO ACTIVE');
  }
}
