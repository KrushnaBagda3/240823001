// 9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime

function checkPrime(num) {
    // Prime numbers are greater than 1
    if (num <= 1) {
      return "Not Prime";
    }
  
    // 2 is the only even prime number
    if (num === 2) {
      return "Prime";
    }
  
    // All other even numbers are not prime
    if (num % 2 === 0) {
      return "Not Prime";
    }
  
    // Check for divisibility from 3 up to the square root of num,
    // incrementing by 2 (to check only odd numbers)
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) {
        return "Not Prime";
      }
    }
  
    return "Prime";
  }
  
  // Test cases
  console.log(`Input: 11, Output: ${checkPrime(11)}`); // Expected: Prime
  console.log(`Input: 1, Output: ${checkPrime(1)}`);   // Expected: Not Prime
  console.log(`Input: 2, Output: ${checkPrime(2)}`);   // Expected: Prime
  console.log(`Input: 4, Output: ${checkPrime(4)}`);   // Expected: Not Prime
  console.log(`Input: 17, Output: ${checkPrime(17)}`); // Expected: Prime
  console.log(`Input: 99, Output: ${checkPrime(99)}`); // Expected: Not Prime