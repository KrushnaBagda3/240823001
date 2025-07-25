// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.
// Input: 20 28
// Output: 4

function findGCD(a, b) {
    // Ensure numbers are non-negative, as GCD is typically defined for positive integers.
    // Using Math.abs() to handle potential negative inputs gracefully.
    a = Math.abs(a);
    b = Math.abs(b);
  
    // Euclidean algorithm
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
  
    return a; // When b becomes 0, a is the GCD
  }
  
  // Test cases
  console.log(`Input: 20 28, Output: ${findGCD(20, 28)}`); // Expected: 4
  console.log(`Input: 48 18, Output: ${findGCD(48, 18)}`); // Expected: 6
  console.log(`Input: 101 103, Output: ${findGCD(101, 103)}`); // Expected: 1 (prime numbers)
  console.log(`Input: 14 0, Output: ${findGCD(14, 0)}`);   // Expected: 14 (GCD(n, 0) = n)
  console.log(`Input: 0 14, Output: ${findGCD(0, 14)}`);   // Expected: 14
  console.log(`Input: 0 0, Output: ${findGCD(0, 0)}`);     // Expected: 0 (Conventionally, GCD(0,0)=0)
  console.log(`Input: -20 28, Output: ${findGCD(-20, 28)}`); // Expected: 4 (handles negative input)