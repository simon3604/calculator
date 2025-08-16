let num1;
let operator;
let num2;



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
}