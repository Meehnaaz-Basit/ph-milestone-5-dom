let isGameOn = false;
function continueGame() {
  const alphabet = getRandomAlphabet();
  // console.log(alphabet);
  const screenAlphabet = document.getElementById("screen-alphabet");
  screenAlphabet.innerHTML = alphabet;
  // set bg keyboard color
  setBgKeyBoardColor(alphabet);
}

function addPlay() {
  addHiddenClass("home-section");
  addHiddenClass("final-score-section");
  removeHiddenClass("playground-section");

  // reset the score and life value
  setElementValueById("game-life", 5);
  setElementValueById("game-score", 0);
  //
  isGameOn = true;

  continueGame();
}

document.addEventListener("keyup", function (event) {
  //
  if (isGameOn == false) return;
  const playerPressed = event.key;
  // console.log(playerPressed);

  // get the expected key or the key that is shown
  const screenAlphabet = document.getElementById("screen-alphabet");
  const screenAlphabetText = screenAlphabet.innerHTML;
  const screenAlphabetToLowerCase = screenAlphabetText.toLowerCase();
  // console.log(playerPressed, screenAlphabetToLowerCase);
  const audio = new Audio();

  // check if matched
  if (playerPressed === screenAlphabetToLowerCase) {
    // console.log("pressed matched");
    // add audio
    audio.src = "audio/success.mp3";
    audio.play();
    // update score
    const currentScore = gamePointUpdate("game-score");
    const newScore = currentScore + 1;
    const gameScoreElement = document.getElementById("game-score");
    gameScoreElement.innerText = newScore;

    // remove bg of the previous pressed btn
    removeBgKeyBoardColor(screenAlphabetToLowerCase);
    // continue the game
    continueGame();
  } else {
    // console.log("try again");
    // add audio
    audio.src = "audio/wrong.mp3";
    audio.play();
    const currentLife = gamePointUpdate("game-life");
    const newLife = currentLife - 1;
    const gameLifeElement = document.getElementById("game-life");
    gameLifeElement.innerText = newLife;

    if (newLife === 0 || playerPressed === "Escape") {
      //
      isGameOn = false;
      // console.log("game over");
      addHiddenClass("playground-section");
      removeHiddenClass("final-score-section");
      // set score
      const lastScore = document.getElementById("game-score");
      lastScoreValue = lastScore.innerText;
      setElementValueById("last-score", lastScoreValue);
      // remove previous selected
      // this.location.reload();
      const currentKey = document.getElementById("screen-alphabet").innerText;
      removeBgKeyBoardColor(currentKey);
    }
  }
});
