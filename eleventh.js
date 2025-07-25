// 11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

function sumDigits(num) {
    // Handle negative numbers by taking the absolute value,
    // as the sum of digits typically refers to the digits themselves.
    const absNum = Math.abs(num);
  
    // Convert the number to a string
    const numString = String(absNum);
  
    // Initialize sum
    let sum = 0;
  
    // Iterate over each character in the string
    for (let i = 0; i < numString.length; i++) {
      // Convert the character back to a number and add to sum
      sum += parseInt(numString[i]);
    }
  
    return sum;
  }
  
  // Test cases
  console.log(`Input: 123, Output: ${sumDigits(123)}`);     // Expected: 6 (1 + 2 + 3)
  console.log(`Input: 5023, Output: ${sumDigits(5023)}`);   // Expected: 10 (5 + 0 + 2 + 3)
  console.log(`Input: 9, Output: ${sumDigits(9)}`);         // Expected: 9
  console.log(`Input: 0, Output: ${sumDigits(0)}`);         // Expected: 0
  console.log(`Input: -456, Output: ${sumDigits(-456)}`);   // Expected: 15 (4 + 5 + 6)