// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.
// Input: a
// Output: Vowel

function checkVowelConsonant(char) {
    // Convert to lowercase to handle both 'A' and 'a' uniformly
    const lowerChar = char.toLowerCase();
  
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Check if the character is a letter
    // Using a regular expression to check if it's an alphabet character
    if (!/^[a-z]$/.test(lowerChar)) {
      return "Not a letter"; // Or "Invalid Input"
    }
  
    // Check if it's a vowel
    if (vowels.includes(lowerChar)) {
      return "Vowel";
    } else {
      return "Consonant";
    }
  }
  
  // Test cases
  console.log(`Input: a, Output: ${checkVowelConsonant('a')}`); // Expected: Vowel
  console.log(`Input: E, Output: ${checkVowelConsonant('E')}`); // Expected: Vowel
  console.log(`Input: b, Output: ${checkVowelConsonant('b')}`); // Expected: Consonant
  console.log(`Input: Z, Output: ${checkVowelConsonant('Z')}`); // Expected: Consonant
  console.log(`Input: 7, Output: ${checkVowelConsonant('7')}`); // Expected: Not a letter
  console.log(`Input: $, Output: ${checkVowelConsonant('$')}`); // Expected: Not a letter