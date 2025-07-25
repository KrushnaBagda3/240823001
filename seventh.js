// 7. Reverse a Number
// Definition: Reverse the digits of a number.
// Input: 1234
// Output: 4321


function reverseNumber(num) {
    // Convert number to string, split into array, reverse, join back
    const reversedStr = num.toString().split('').reverse().join('');
    // Convert back to number and return
    return parseInt(reversedStr, 10);
  }
  
  // Example usage:
  const num = 12345;
  const reversed = reverseNumber(num);
  console.log(reversed); // Output: 54321
  