function calculateTriangleArea() {
  //get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const triangleBaseFloat = parseFloat(triangleBaseText); // convert to number

  //get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeightFloat = parseFloat(triangleHeightText);

  // calculate triangle area
  const triangleArea = 0.5 * triangleBaseFloat * triangleHeightFloat;
  //   console.log(`the area of triangle is ${triangleArea}`);

  //  triangle area display
  const triangleAreaDisplay = document.getElementById("triangle-area-display");
  triangleAreaDisplay.innerText = triangleArea;
}
