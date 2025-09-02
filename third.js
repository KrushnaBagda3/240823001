// 3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return "this is leap year";
    } else {
      return "this is not leap year";
    }
  }
  
  // Example usage:
  console.log(isLeapYear(2024)); // Output: true (divisible by 4, not by 100)
  console.log(isLeapYear(1900)); // Output: false (divisible by 100, not by 400)
  console.log(isLeapYear(2000)); // Output: true (divisible by 400)
  console.log(isLeapYear(2023)); // Output: false (not divisible by 4)