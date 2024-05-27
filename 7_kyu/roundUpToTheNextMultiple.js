// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//
//     Examples:
//
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.

const roundToNext5 = n => Math.ceil(n / 5) * 5

const runTests = () => {
    const tests = [
        { input: 0, expected: 0 },
        { input: 2, expected: 5 },
        { input: 3, expected: 5 },
        { input: 12, expected: 15 },
        { input: 21, expected: 25 },
        { input: 30, expected: 30 },
        { input: -2, expected: 0 },
        { input: -5, expected: -5 },
        { input: -7, expected: -5 },
        { input: 45, expected: 45 },
        { input: 47, expected: 50 }
    ];

    let passed = 0;
    let failed = 0;

    tests.forEach(test => {
        const result = roundToNext5(test.input);
        if (result === test.expected) {
            console.log(`Passed: Input: ${test.input}, Expected: ${test.expected}, Got: ${result}`);
            passed++;
        } else {
            console.error(`Failed: Input: ${test.input}, Expected: ${test.expected}, Got: ${result}`);
            failed++;
        }
    });

    console.log(`\nTotal tests: ${tests.length}, Passed: ${passed}, Failed: ${failed}`);
};

runTests();

