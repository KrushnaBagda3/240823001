// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10


function printDivisors(num) {
    if (num <= 0) {
      console.log("Input must be a positive integer.");
      return;
    }
  
    const divisors = [];
  
    // Iterate from 1 up to the square root of the number
    // If 'i' is a divisor, then 'num / i' is also a divisor.
    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i); // Add 'i' as a divisor
        if (i * i !== num) { // If 'i' is not the square root, 'num/i' is a distinct divisor
          divisors.push(num / i); // Add the corresponding co-divisor
        }
      }
    }
  
    // Sort the divisors for a clean, ordered output
    divisors.sort((a, b) => a - b);
  
    console.log(`Input: ${num}`);
    console.log(`Output: ${divisors.join(' ')}`);
  }
  
  // Test cases
  printDivisors(10);  // Expected: 1 2 5 10
  printDivisors(12);  // Expected: 1 2 3 4 6 12
  printDivisors(7);   // Expected: 1 7
  printDivisors(36);  // Expected: 1 2 3 4 6 9 12 18 36 (handles perfect squares correctly)
  printDivisors(1);   // Expected: 1
  printDivisors(0);   // Expected: Input must be a positive integer.
  printDivisors(-5);  // Expected: Input must be a positive integer.