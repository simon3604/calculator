let num1 = undefined;
let operator;
let num2 = undefined;
let memory = undefined;
let justCounted;


const display = document.querySelector(".display");


const operators = ["+", "-", "*", "/"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


const btns = document.querySelectorAll(".btn");

btns.forEach(function(elem) {
  elem.addEventListener("click", function(e) {
    const clickedBtn = e.target.id 
    
    // Checks if the clicked button is Clear
    if (clickedBtn === "clear") {
      num1 = undefined;
      operator = undefined;
      num2 = undefined;
      display.innerText = "0";
    } 

    // Checks if the clicked button is a number
    else if ( numbers.indexOf(clickedBtn) > -1) {
      //Checks if it should set the clicked number to num1
      if (num1 === undefined || justCounted === true 
        && operator === undefined) {
        num1 = clickedBtn;
        justCounted = false;
        display.innerText = num1;
      } 
      // Checks if it should add the clicked number to num1
      else if (operator === undefined) {
        num1 += clickedBtn;
        display.innerText = num1;
      }
      // Checks if it should set the clicked button to num2
      else if (num2 === undefined && operator !== undefined) {
        num2 = clickedBtn;
        display.innerText += num2;
      }
      // Checks if it should add the clicked number to num2
      else if (operator !== undefined) {
        num2 += clickedBtn;
        display += num2;
      }
    }

    // Checks if the pressed button is an operator
    else if (operators.indexOf(clickedBtn) > -1) {
      operator = clickedBtn;
      display.innerText = display.innerText + " " + operator;
    }

    else if (clickedBtn === "=") {
      display.innerText = operate(operator, num1, num2);
      operator = undefined;
      num1 = display.innerText
      num2 = undefined;
      justCounted = true;
    }
    else if (clickedBtn === "M+") {
      if (num1 !== undefined && operator === undefined) {
        memory = num1;
        numbers.push(memory);
        document.getElementById("M").style.backgroundColor = "green";
        num1 = undefined;
        operator = undefined;
        num2 = undefined;
        display.innerText = "0";
      }
    }
    else if (clickedBtn === "MC") {
      memory = undefined;
      numbers.pop()
      document.getElementById("M").style.backgroundColor = "aqua";
    }

    console.log(num1, num2, operator)
    
    /* Checks if an operator is pressed
    if (operators.indexOf(clickedBtn) > -1) {
      operator = clickedBtn;
      display.innerText = display.innerText + " " + operator;
    } 

    
    else if (clickedBtn !== "=" && operator === undefined && clickedBtn !== "clear"
      && clickedBtn !== "." && clickedBtn !== "M") {
      if (num1 === undefined || num1 === "0" || justCounted === true) {
        num1 = clickedBtn;
        justCounted = false;
      } else {
        num1 += clickedBtn;
      }
      display.innerText = num1;
    } 
    else if (clickedBtn === "." && num1.indexOf(".") === -1 && 
    operator === undefined) {
      num1 += clickedBtn; 
      console.log(num1)
      display.innerText = num1;
    }

    // Dot for num2
    else if (clickedBtn === "." && num2.indexOf(".") === -1 && num1 !== undefined) {
      num2 += clickedBtn;
      display.innerText += clickedBtn;
    }

    
    else if (clickedBtn !== "=" && clickedBtn !== "clear" && operator !== undefined) {
      if (num2 === undefined && clickedBtn === "M" && memory !== undefined) {
        num2 = memory;
      } else if (num2 === undefined) {
        num2 = clickedBtn;
      } else if (clickedBtn !== "M") {
        num2 += clickedBtn;
      } 
      display.innerText = display.innerText + " " + clickedBtn;
      console.log(num1, num2, operator, memory);
    } 
    else if (clickedBtn === "clear") {
      num1 = undefined;
      operator = undefined;
      num2 = undefined;
      display.innerText = "0";
    } else if (clickedBtn === "M+") {
      if (num1 !== undefined && operator === undefined) {
        memory = num1;
        document.getElementById("M").style.backgroundColor = "green";
        num1 = undefined;
        operator = undefined;
        num2 = undefined;
        display.innerText = "0";
      }
    }
    else {
      display.innerText = operate(operator, parseFloat(num1), parseFloat(num2));
      operator = undefined;
      num1 = display.innerText
      num2 = undefined;
      justCounted = true;
    } */
    
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

// function raise(num1, num2) {
//   const answer = num1 ** num2;
//   return(answer);
// }

// function root(num1) {
//   return(Math.sqrt(num1))
// }


function operate(operator, num1, num2) {
  if (!operator) {
    operator = "+"
  }

  if (!num1) {
    num1 = "0"
  }

  if (!num2) {
    num2 = "0"
  }
  
  if (operator && num1 && num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

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

 
  throw new Error('Unknown operator');
}


