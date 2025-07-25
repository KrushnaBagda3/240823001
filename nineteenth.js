// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.
// Input: -5
// Output: Negative

function checkNumberSign(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // Test cases
  console.log(`Input: -5, Output: ${checkNumberSign(-5)}`);   // Expected: Negative
  console.log(`Input: 10, Output: ${checkNumberSign(10)}`);   // Expected: Positive
  console.log(`Input: 0, Output: ${checkNumberSign(0)}`);     // Expected: Zero
  console.log(`Input: 3.14, Output: ${checkNumberSign(3.14)}`); // Expected: Positive (works for floats)
  console.log(`Input: -0.001, Output: ${checkNumberSign(-0.001)}`); // Expected: Negative (works for floats)