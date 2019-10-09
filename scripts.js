const container = document.querySelectorAll(".container1 *");
const enter = document.querySelector("#enter");

let total1 = "0";
let total2 = "0";
let mode = 1;
let operator = "";
// loops through every button under container and assigns event listener
for (i = 0; i < container.length; i++) {
  switch (container[i].id) {
    case "clear":
      container[i].addEventListener("click", clearIt);
      break;
    case "backspace":
      container[i].addEventListener("click", backSpace);
      break;
    case "equals":
      container[i].addEventListener("click", equals);
      break;
    case "multiply":
      container[i].addEventListener("click", multiply);
      break;
    case "divide":
      container[i].addEventListener("click", divide);
      break;
    case "add":
      container[i].addEventListener("click", add);
      break;
    case "subtract":
      container[i].addEventListener("click", subtract);
      break;
    case "decimal":
      container[i].addEventListener("click", addDecimal);
      break;
    default:
      container[i].addEventListener("click", addNum);
  }
}
// put number in 1st or 2nd number, makes sure 0 is replaced
function addNum(e) {
  if (mode == 1) {
    if (total1 === "0") {
      total1 = e.target.id;
      enter.textContent = total1;
    } else {
      total1 = `${total1}${e.target.id}`;
      enter.textContent = total1;
    }
  } else {
    if (total2 === "0") {
      total2 = e.target.id;
      enter.textContent = total2;
    } else {
      total2 = `${total2}${e.target.id}`;
      enter.textContent = total2;
    }
  }
}
// clear button turns both numbers to zero and readies input for first number
function clearIt() {
  total1 = "0";
  total2 = "0";
  mode = 1;
  operator = "";
  enter.textContent = total1;
}
// add button: resets 2nd number, readies input for 2nd number, and sets operator
function add() {
  total2 = "0";
  mode = 2;
  operator = "add";
}
// subtract button
function subtract() {
  total2 = "0";
  mode = 2;
  operator = "subtract";
}
// multiply button
function multiply() {
  total2 = "0";
  mode = 2;
  operator = "multiply";
}
// divide button
function divide() {
  total2 = "0";
  mode = 2;
  operator = "divide";
}
// equals button sets values to numbers and computes
function equals() {
  switch (operator) {
    case "add":
      total1 = +(parseFloat(total1) + parseFloat(total2)).toFixed(12);
      enter.textContent = total1;
      mode = 1;
      break;
    case "subtract":
      total1 = +(parseFloat(total1) - parseFloat(total2)).toFixed(12);
      enter.textContent = total1;
      mode = 1;
      break;
    case "multiply":
      total1 = +(parseFloat(total1) * parseFloat(total2)).toFixed(12);
      enter.textContent = total1;
      mode = 1;
      break;
    case "divide":
      total1 = +(parseFloat(total1) / parseFloat(total2)).toFixed(12);
      enter.textContent = total1;
      mode = 1;
      break;
    default:
      break;
  }
}
// decimal button, makes sure only once decimal can be placed
function addDecimal() {
  if (mode == 1) {
    if (total1.indexOf(".") > -1) {
      console.log("decimal already in use");
    } else {
      total1 = `${total1}.`;
      enter.textContent = total1;
    }
  } else {
    if (total2.indexOf(".") > -1) {
      console.log("decimal already in use");
    } else {
      total2 = `${total2}.`;
      enter.textContent = total2;
    }
  }
}
// back space button converts value to string to remove last digit
function backSpace() {
  if (mode == 1) {
    if (total1.length == 1) {
      total1 = "0";
      enter.textContent = total1;
    } else {
      total1 = total1.toString().slice(0, -1);
      enter.textContent = total1;
    }
  } else {
    if (total2.length == 1) {
      total2 = "0";
      enter.textContent = total2;
    } else {
      total2 = total2.toString().slice(0, -1);
      enter.textContent = total2;
    }
  }
}
