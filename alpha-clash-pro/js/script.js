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
  removeHiddenClass("playground-section");

  continueGame();
}
