// 12. Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of
// the number of digits.
// Input: 153
// Output: Armstrong

function checkArmstrong(num) {
    // Armstrong numbers are typically defined for positive integers.
    // We'll work with the absolute value for calculation, but
    // the result applies to the original positive number.
    if (num < 0) {
      return "Not Armstrong (Armstrong numbers are positive)";
    }
  
    // 1. Count the number of digits
    const numStr = String(num);
    const numberOfDigits = numStr.length;
  
    let sumOfPowers = 0;
    let tempNum = num; // Use a temporary variable to manipulate the number
  
    // 2. & 3. Extract each digit and raise to the power
    while (tempNum > 0) {
      const digit = tempNum % 10; // Get the last digit
      sumOfPowers += Math.pow(digit, numberOfDigits); // Raise to power and add to sum
      tempNum = Math.floor(tempNum / 10); // Remove the last digit
    }
  
    // 5. Compare the sum with the original number
    if (sumOfPowers === num) {
      return "Armstrong";
    } else {
      return "Not Armstrong";
    }
  }
  
  // Test cases
  console.log(`Input: 153, Output: ${checkArmstrong(153)}`);   // Expected: Armstrong (1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153)
  console.log(`Input: 9, Output: ${checkArmstrong(9)}`);     // Expected: Armstrong (9^1 = 9) - Single-digit numbers are Armstrong numbers
  console.log(`Input: 370, Output: ${checkArmstrong(370)}`);   // Expected: Armstrong (3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370)
  console.log(`Input: 371, Output: ${checkArmstrong(371)}`);   // Expected: Armstrong (3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371)
  console.log(`Input: 1634, Output: ${checkArmstrong(1634)}`); // Expected: Armstrong (1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634)
  console.log(`Input: 123, Output: ${checkArmstrong(123)}`);   // Expected: Not Armstrong
  console.log(`Input: 0, Output: ${checkArmstrong(0)}`);       // Expected: Armstrong (0^1 = 0) - Conventionally considered Armstrong
  console.log(`Input: -153, Output: ${checkArmstrong(-153)}`); // Expected: Not Armstrong (Armstrong numbers are positive)