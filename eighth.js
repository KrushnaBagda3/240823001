// 8. Palindrome Check (Number)
// Definition: Check if a number reads the same backward.
// Input: 121
// Output: Palindrome

function isPalindromeNumber(num) {
    // Convert number to string
    const str = num.toString();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Check if original string and reversed string are the same
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindromeNumber(121));  // true
  console.log(isPalindromeNumber(123));  // false
  console.log(isPalindromeNumber(1221)); // true
  console.log(isPalindromeNumber(-121)); // false (because of '-')
  