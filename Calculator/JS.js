/* Helper method for receiving number from HTML input */
function getNumberFromInput(input) {
  return parseInt(document.getElementById(input).value);
}

/* Helper method for writing result to HTML */
function writeResult(result) {
  document.getElementById("out").innerHTML = result;
}

/* Logic */
function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

/* Buttons click handler */
function calculate(operation) {
  const num1 = getNumberFromInput("n1");
  const num2 = getNumberFromInput("n2");

  switch (operation) {
    case "plus":
      writeResult(plus(num1, num2));
      break;

    case "minus":
      writeResult(minus(num1, num2));
      break;

    case "multiply":
      writeResult(multiply(num1, num2));
      break;

    case "divide":
      writeResult(divide(num1, num2));
      break;
  }
}

module.exports = {
  plus,
  minus,
  multiply,
  divide,
  calculate
};
