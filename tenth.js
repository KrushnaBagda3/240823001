// 10. Count Digits in a Number
// Definition: Count how many digits a number contains.
// Input: 5023
// Output: 4

function countDigits(num) {
    // Convert the number to a string
    const numString = String(num);
  
    // Return the length of the string
    return numString.length;
  }
  
  // Test cases
  console.log(`Input: 5023, Output: ${countDigits(5023)}`);    // Expected: 4
  console.log(`Input: 123456, Output: ${countDigits(123456)}`); // Expected: 6
  console.log(`Input: 0, Output: ${countDigits(0)}`);         // Expected: 1
  console.log(`Input: -789, Output: ${countDigits(-789)}`);   // Expected: 3 (absolute value)