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
  element.classList.add("bg-[#FFA500]");
}

function removeBgKeyBoardColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#FFA500]");
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

function gamePointUpdate(eventId) {
  const event = document.getElementById(eventId);
  const eventText = event.innerText;
  const eventTextNum = parseInt(eventText);
  return eventTextNum;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
