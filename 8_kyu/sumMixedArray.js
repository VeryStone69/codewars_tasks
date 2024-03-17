// Given an array of integers as strings and numbers, return
// the sum of the array values as if all were numbers.
//     Return your answer as a number.

function sumMix(x){
    const sumWithInitial = x.reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
    return sumWithInitial;
}

function testSumMix() {
    const testCases = [
        {input: [1, 2, 3, 4], expected: 10},
        {input: ["1", "2", "3", "4"], expected: 10},
        {input: [1, "2", 3, "4"], expected: 10},
        {input: [5], expected: 5},
        {input: ["5"], expected: 5},
        {input: [], expected: 0},
        {input: [-1, "-2", 3, "4"], expected: 4},
        {input: [0, "0", 1, "1"], expected: 2},
    ];

    testCases.forEach((testCase, index) => {
        const {input, expected} = testCase;
        const result = sumMix(input);
        if (result === expected) {
            console.log(`Test ${index + 1} passed: sumMix([${input}]) === ${expected}`);
        } else {
            console.error(`Test ${index + 1} failed: sumMix([${input}]) expected ${expected}, but got ${result}`);
        }
    });
}

testSumMix();



