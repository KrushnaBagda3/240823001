function factorialIterative(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  console.log(factorialIterative(5)); // Output: 120
  console.log(factorialIterative(0)); // Output: 1
  console.log(factorialIterative(-3)); // Output: Factorial is not defined for negative numbers.

//   PS D:\krushna\sem 3\node\240823001> node fifth.js
// 120
// 1
// Factorial is not defined for negative numbers.