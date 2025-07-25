// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.
// Input: 7
// Output: Odd



function checkOddEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(checkOddEven(4)); 
  console.log(checkOddEven(7)); 
