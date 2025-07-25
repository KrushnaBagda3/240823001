// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3



function generateFibonacci(n) {
    if (n <= 0) {
      return []; // Return an empty array for non-positive n
    } else if (n === 1) {
      return [0]; // First Fibonacci number is 0
    }
  
    const fibSeries = [0, 1]; // Start with the first two Fibonacci numbers
  
    for (let i = 2; i < n; i++) {
      const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextFib);
    }
  
    return fibSeries;
  }
  
  // Test cases
  const input = 5;
  const output = generateFibonacci(input);
  console.log(`Input: ${input}`);
  console.log(`Output: ${output.join(' ')}`); // Join with space for requested output format
  
  console.log(`\nInput: 0, Output: ${generateFibonacci(0).join(' ')}`);
  console.log(`Input: 1, Output: ${generateFibonacci(1).join(' ')}`);
  console.log(`Input: 2, Output: ${generateFibonacci(2).join(' ')}`);
  console.log(`Input: 10, Output: ${generateFibonacci(10).join(' ')}`);