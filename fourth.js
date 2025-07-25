// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15


function sum_of_natural_numbers(n) {
    return (n * (n + 1)) / 2;
  }
  
  // Example usage
  let n = 5;
  let sum = sum_of_natural_numbers(n);
  console.log("Sum of the first", n, "natural numbers:", sum); // Output: Sum of the first 5 natural numbers: 15