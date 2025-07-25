// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.
// Input: 28
// Output: Perfect

function checkPerfectNumber(num) {
    // Perfect numbers are positive integers.
    // 0 and negative numbers are not considered perfect.
    if (num <= 0) {
      return "Not Perfect (must be a positive integer)";
    }
  
    let sumOfDivisors = 1; // Start with 1 because 1 is a divisor of every number
  
    // Iterate from 2 up to the square root of the number
    // If 'i' is a divisor, then 'num / i' is also a divisor.
    // We only check up to sqrt(num) for efficiency.
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sumOfDivisors += i; // Add 'i' as a divisor
        if (i * i !== num) { // Avoid adding the same divisor twice for perfect squares
          sumOfDivisors += num / i; // Add the corresponding co-divisor
        }
      }
    }
  
    // A perfect number's sum of its proper positive divisors (excluding itself)
    // equals the number itself.
    return sumOfDivisors === num ? "Perfect" : "Not Perfect";
  }
  
  // Test cases
  console.log(`Input: 28, Output: ${checkPerfectNumber(28)}`);   // Expected: Perfect (1 + 2 + 4 + 7 + 14 = 28)
  console.log(`Input: 6, Output: ${checkPerfectNumber(6)}`);     // Expected: Perfect (1 + 2 + 3 = 6)
  console.log(`Input: 496, Output: ${checkPerfectNumber(496)}`); // Expected: Perfect (1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496)
  console.log(`Input: 8128, Output: ${checkPerfectNumber(8128)}`); // Expected: Perfect
  console.log(`Input: 1, Output: ${checkPerfectNumber(1)}`);     // Expected: Not Perfect (sum of divisors is 0)
  console.log(`Input: 7, Output: ${checkPerfectNumber(7)}`);     // Expected: Not Perfect
  console.log(`Input: 10, Output: ${checkPerfectNumber(10)}`);   // Expected: Not Perfect
  console.log(`Input: 0, Output: ${checkPerfectNumber(0)}`);     // Expected: Not Perfect
  console.log(`Input: -6, Output: ${checkPerfectNumber(-6)}`);   // Expected: Not Perfect