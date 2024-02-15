// reusable function

function getInputValueById(inputFieldId) {
  const shapeInput = document.getElementById(inputFieldId);
  const shapeInputValue = shapeInput.value;
  const inputValueFloat = parseFloat(shapeInputValue);

  return inputValueFloat;
}

function setInnerText(elementId, areaValue) {
  const element = document.getElementById(elementId);
  element.innerText = areaValue;
}

// parallelogram area calculation
function calculateParallelogramArea() {
  const parallelogramBase = getInputValueById("parallelogram-base");
  const parallelogramHeight = getInputValueById("parallelogram-height");
  //   area
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  //   display area
  setInnerText("parallelogram-area-display", parallelogramArea);
}

// rhombus area calculation
function calculateRhombusArea() {
  const rhombusD1 = getInputValueById("rhombus-d1");
  const rhombusD2 = getInputValueById("rhombus-d2");
  // area calculation
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  // display area
  setInnerText("rhombus-area-display", rhombusArea);
}

// pentagon area calculation
function calculatePentagonArea() {
  const pentagonP = getInputValueById("pentagon-p");
  const pentagonB = getInputValueById("pentagon-b");
  // area
  const pentagonArea = 0.5 * pentagonP * pentagonB;
  // display area
  setInnerText("pentagon-area-display", pentagonArea);
}

// ellipse area calculation
function calculateEllipseArea() {
  const ellipseA = getInputValueById("ellipse-a");
  const ellipseB = getInputValueById("ellipse-b");
  // area
  const ellipseArea = 3.14 * ellipseA * ellipseB;
  // display area
  setInnerText("ellipse-area-display", ellipseArea);
}
