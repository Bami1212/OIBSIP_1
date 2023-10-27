let currentResult = ""; // Holds the current expression
let decimalAdded = false; // Flag to check if decimal point is already added

// Append a value to the current expression
function appendValue(value) {
  currentResult += value;
  document.getElementById("result").value = currentResult;
}

// Append a decimal point to the current expression
function appendDecimal() {
  if (!decimalAdded) {
    currentResult += ".";
    document.getElementById("result").value = currentResult;
    decimalAdded = true;
  }
}

// Clear the current expression
function clearResult() {
  currentResult = "";
  decimalAdded = false;
  document.getElementById("result").value = currentResult;
}

// Calculate the result
function calculateResult() {
  let result;
  let operator = "";
  
  if (currentResult.includes('+')) {
    operator = '+';
  } else if (currentResult.includes('-')) {
    operator = '-';
  } else if (currentResult.includes('*')) {
    operator = '*';
  } else if (currentResult.includes('/')) {
    operator = '/';
  }

  if (operator !== "") {
    const numbers = currentResult.split(operator);
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error";
      }
    }
    
    document.getElementById("result").value = result;
    currentResult = result.toString();
    decimalAdded = false;
  }
}