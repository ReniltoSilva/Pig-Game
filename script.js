'use strict';

const jsConfetti = new JSConfetti();

//Saved Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceField = document.querySelector('.dice');

//Player 0
const winsScoreP0 = document.querySelector('.player--0-wins-container');
const containerP0 = document.querySelector('.span-player-0');
const totalScoreFieldPZero = document.querySelector('#score--0');
const currentFieldPZero = document.querySelector('#current--0');
const playerZero = document.querySelector('.player--0');

//Player 1
const winsScoreP1 = document.querySelector('.player--1-wins-container');
const containerP1 = document.querySelector('.span-player-1');
const totalScoreFieldPOne = document.querySelector('#score--1');
const currentfieldPOne = document.querySelector('#current--1');
const playerOne = document.querySelector('.player--1');

let playing, scores, currentScore, activePlayer;
let winsScore = [0, 0];
winsScoreP0.textContent = 0;
winsScoreP1.textContent = 0;

//Starting Conditions
const init = function () {
  //Current and Total Score for PlayerZero
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  //Set all scores in the screen to Zero
  totalScoreFieldPZero.textContent = 0;
  currentFieldPZero.textContent = 0;
  totalScoreFieldPOne.textContent = 0;
  currentfieldPOne.textContent = 0;

  //Hide dice img on the screen
  diceField.classList.add('hidden');

  //Add and remove classes accordingly
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');
  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');

  //Remove class on buttons accordingly
  btnRoll.classList.remove('btn-inactive');
  btnHold.classList.remove('btn-inactive');
};

init();

//FUNCTION TO RESET THE WHOLE GAME
btnNew.addEventListener('click', init);

//FUNCTION TO ROLL DICE & GENERATE RANDOM NUMBER
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      // document.querySelector(`#current--${activePlayer}`).textContent = 0;
      // document.querySelector(`#score--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // playerZero.classList.toggle('player--active');
      // playerOne.classList.toggle('player--active');
      scores[activePlayer] = 0;
      document.querySelector(`#score--${activePlayer}`).textContent = 0;
      changePlayers();
    }
  }
});

//FUNCTION TO HOLD THE TOTAL VALUE & CHANGE PLAYERS.
btnHold.addEventListener('click', function () {
  // REVIEW
  if (playing) {
    diceField.classList.add('hidden');
    // document.querySelector(`#current--${activePlayer}`).textContent = 0;
    // document.querySelector(`#score--${activePlayer}`).textContent = currentScore;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;
    // playerZero.classList.toggle('player--active');
    // playerOne.classList.toggle('player--active');
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      updateWinsScore();
    }
  }

  //Finish the game if >= 20 or keep playing
  if (scores[activePlayer] >= 20) {
    //Finish the game
    playing = false;

    //Add winner class and remove active class
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    //Add clas 'btn-inactive' to display button inactivity
    btnRoll.classList.add('btn-inactive');
    btnHold.classList.add('btn-inactive');

    //Reset current score for both players
    currentScore = 0;

    jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54',
        '#ff477e',
        '#ff7096',
        '#ff85a1',
        '#fbb1bd',
        '#f9bec7',
      ],
      confettiRadius: 5,
      confettiNumber: 50,
    });

    jsConfetti.addConfetti();
  } else {
    changePlayers();
  }
});

//FUNCTION TO UPDATE WINS SCORE
function updateWinsScore() {
  winsScore[activePlayer] = winsScore[activePlayer] + 1;
  document.querySelector(
    `.player--${activePlayer}-wins-container`
  ).textContent = winsScore[activePlayer];

  //Check what player is winning and add 'active-span-player'
  if (winsScore[0] > winsScore[1]) {
    containerP0.classList.add('active-span-player');
  } else if (winsScore[0] < winsScore[1]) {
    containerP0.classList.remove('active-span-player');
    containerP1.classList.add('active-span-player');
  } else {
    containerP0.classList.remove('active-span-player');
    containerP1.classList.remove('active-span-player');
  }
}

//FUNCTION TO CHANGE PLAYERS & DISPLAY CORRECT SCORE
function changePlayers() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
}

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
