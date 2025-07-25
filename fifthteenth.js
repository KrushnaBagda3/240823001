// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator";
    }
  }
  
  // Test cases
  console.log(`Input: 4 + 2, Output: ${calculate(4, '+', 2)}`); // Expected: 6
  console.log(`Input: 10 - 3, Output: ${calculate(10, '-', 3)}`); // Expected: 7
  console.log(`Input: 5 * 6, Output: ${calculate(5, '*', 6)}`); // Expected: 30
  console.log(`Input: 10 / 2, Output: ${calculate(10, '/', 2)}`); // Expected: 5
  console.log(`Input: 7 / 0, Output: ${calculate(7, '/', 0)}`); // Expected: Error: Division by zero
  console.log(`Input: 8 % 3 (invalid), Output: ${calculate(8, '%', 3)}`); // Expected: Error: Invalid operator