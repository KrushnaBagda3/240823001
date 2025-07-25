// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
// Input: 2 3
// Output: 8

function findPower(base, exponent) {
    // Math.pow(base, exponent) is the standard JavaScript function for exponentiation.
    return Math.pow(base, exponent);
  }
  
  // Test cases
  console.log(`Input: 2 3, Output: ${findPower(2, 3)}`);   // Expected: 8 (2 * 2 * 2)
  console.log(`Input: 5 0, Output: ${findPower(5, 0)}`);   // Expected: 1 (any number to the power of 0 is 1)
  console.log(`Input: 10 1, Output: ${findPower(10, 1)}`); // Expected: 10 (any number to the power of 1 is itself)
  console.log(`Input: 4 0.5, Output: ${findPower(4, 0.5)}`); // Expected: 2 (square root)
  console.log(`Input: 2 -3, Output: ${findPower(2, -3)}`); // Expected: 0.125 (1 / (2*2*2) = 1/8)
  console.log(`Input: -3 2, Output: ${findPower(-3, 2)}`); // Expected: 9 ((-3) * (-3))
  console.log(`Input: -3 3, Output: ${findPower(-3, 3)}`); // Expected: -27 ((-3) * (-3) * (-3))