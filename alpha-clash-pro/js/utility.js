function addHiddenClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function removeHiddenClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgKeyBoardColor(elementId) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = "#FFA500";
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");

  const randomNumber = Math.random() * alphabetArray.length - 1;
  const randomRoundNumber = Math.round(randomNumber);

  // console.log(randomRoundNumber);
  const alphabet = alphabetArray[randomRoundNumber];
  // console.log(alphabetArray, alphabet);
  return alphabet;
}
