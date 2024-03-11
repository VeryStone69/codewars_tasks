//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
//     Examples:
// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    if (!array.length) {return "even"}
    else return array.reduce((accum, currentValue) => accum + currentValue) % 2 ? "odd":"even"
}

function testOddOrEven() {
    const testCases = [
        { input: [0], expected: "even" },
        { input: [0, 1, 4], expected: "odd" },
        { input: [0, -1, -5], expected: "even" },
        { input: [], expected: "even" },
        { input: [1, 2, 3], expected: "even" },
        { input: [1, 2, 3, 4], expected: "even" },
        { input: [-1023, 1, -2, 3], expected: "odd" },
    ];

    testCases.forEach((testCase, index) => {
        const { input, expected } = testCase;
        const result = oddOrEven(input);
        console.log(`Test Case ${index + 1}: ${result === expected ? "Pass" : "Fail"}`);
        if(result !== expected) {
            console.error(`Expected "${expected}", got "${result}" for input [${input.join(', ')}]`);
        }
    });
}

testOddOrEven();