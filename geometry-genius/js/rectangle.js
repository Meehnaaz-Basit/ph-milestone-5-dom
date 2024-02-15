function calculateRectangleArea() {
  // get width
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidthFloat = parseFloat(rectangleWidthText);

  //   get length
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleLengthFloat = parseFloat(rectangleLengthText);

  //   area calculation
  const rectangleArea = rectangleWidthFloat * rectangleLengthFloat;

  // display area
  const rectangleDisplayArea = document.getElementById(
    "rectangle-area-display"
  );
  rectangleDisplayArea.innerText = rectangleArea;
}
