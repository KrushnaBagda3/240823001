// 6. Print Multiplication Table
// Definition: Display multiplication table of a number up to 10.

// Input: 3
// Output: 3 x 1 = 3
// ...
// 3 x 10 = 30


const number = 7; // You can change this number to any integer

console.log(`Multiplication Table for ${number}:`);

for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}