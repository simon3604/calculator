let num1 = 0;
let operator;
let num2 = 0;
const display = document.querySelector(".display");

const operators = ["+", "-", "*", "/"];


const btns = document.querySelectorAll(".btn");

btns.forEach(function(elem) {
  elem.addEventListener("click", function(e) {
    const clickedBtn = e.target.id 

    if (operators.indexOf(clickedBtn) > -1) {
      operator = clickedBtn;
      display.innerText = display.innerText + " " + operator;
    } 
    else if (clickedBtn !== "=" && operator === undefined) {
      num1 = clickedBtn;
      
      display.innerText = num1;
    } 
    else if (clickedBtn !== "=") {
      num2 = clickedBtn;
      display.innerText = display.innerText + " " + num2;
    } 
    else {
      display.innerText = operate(operator, parseFloat(num1), parseFloat(num2));
      operator = undefined;
      num1 = parseFloat(display.innerText)
      num2 = 0;
    }
  })
})


function add(num1, num2) { 
  const answer = num1 + num2;
  return(answer);
}

function subtract(num1, num2) {
  const answer = num1 - num2;
  return(answer);
}

function multiply(num1, num2) {
  const answer = num1 * num2;
  return(answer);
}

function divide(num1, num2) {
  const answer = num1 / num2;
  return(answer);
}


function operate(operator, num1, num2) {
  if (operator === "+") {
    return(add(num1, num2));
  }
  
  if (operator === "-") {
    return(subtract(num1, num2));
  }
  
  if (operator === "*") {
    return(multiply(num1, num2));
  }
  
  if (operator === "/") {
    return(divide(num1, num2));
  }

  
  

  throw new Error('Unknown operator');
}

