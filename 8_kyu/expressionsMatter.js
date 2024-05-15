// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets:
//     +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more
//     detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//
// Notes
// The numbers are always positive.
//     The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
//     It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
//     You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    const result = [(a + b) * c,
        a + b + c,
        a * b * c,
        a * (b + c),
        a + b * c,];
    return Math.max(...result);
}


const testCases = [
    { a: 1, b: 2, c: 3, expected: 9 },  // a * b * c
    { a: 1, b: 2, c: 1, expected: 4 },  // a * (b + c)
    { a: 1, b: 1, c: 1, expected: 3 },  // a + b + c
    { a: 9, b: 7, c: 2, expected: 126 }, // a * b * c
    { a: 5, b: 1, c: 10, expected: 60 }, // (a + b) * c
];
const assert = require('assert');

testCases.forEach(({ a, b, c, expected }, index) => {
    const message = `Test case ${index + 1}: ${a}, ${b}, ${c}`;
    assert.strictEqual(expressionMatter(a, b, c), expected, message);
});

console.log('All test cases passed!');
