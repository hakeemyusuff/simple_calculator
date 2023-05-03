const displayScreen = document.querySelector(".display-text");
const buttons = document.querySelectorAll(".button");
let firstInput;
let secondInput;
let output;
let operator;
let string;

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function division(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

buttons[0].addEventListener("click", () => {
  displayScreen.innerText = "0";
});

buttons[1].addEventListener("click", () => {
  string = displayScreen.innerText;
  displayScreen.innerText = string.slice(0, -1);
});

function myOperatorEvent(a) {
  buttons[a].addEventListener("click", () => {
    firstInput = displayScreen.innerText;
    displayScreen.innerText = buttons[a].innerText;
    operator = displayScreen.innerText;
  });
}

function myButtonEvent(b) {
  buttons[b].addEventListener("click", () => {
    if (displayScreen.innerText.length != 8) {
      if (
        displayScreen.innerText != "/" &&
        displayScreen.innerText != "0" &&
        displayScreen.innerText != "*" &&
        displayScreen.innerText != "+" &&
        displayScreen.innerText != "-" &&
        displayScreen.innerText != output
      ) {
        displayScreen.innerText =
          displayScreen.innerText + buttons[b].innerText;
      } else {
        displayScreen.innerText = buttons[b].innerText;
      }
    }
  });
}

myOperatorEvent(2);
myOperatorEvent(6);
myOperatorEvent(10);
myOperatorEvent(14);

myButtonEvent(3);
myButtonEvent(4);
myButtonEvent(5);
myButtonEvent(7);
myButtonEvent(8);
myButtonEvent(9);
myButtonEvent(11);
myButtonEvent(12);
myButtonEvent(13);
myButtonEvent(15);

buttons[16].addEventListener("click", () => {
  secondInput = displayScreen.innerText;
  firstInput = +firstInput;
  secondInput = +secondInput;
  if (operator == "+") {
    output = add(firstInput, secondInput);
  } else if (operator == "-") {
    output = subtract(firstInput, secondInput);
  } else if (operator == "/") {
    output = division(firstInput, secondInput);
  } else {
    output = multiply(firstInput, secondInput);
  }
  displayScreen.innerText = output;
});
