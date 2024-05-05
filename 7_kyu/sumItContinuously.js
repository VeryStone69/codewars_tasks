// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.
//
//     For example:
//
//     add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]

function add(arr) {
    let sum = 0;
    return arr.map((number) => (sum += number));
}

// Test cases
const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [1, 3, 6, 10, 15] },
    { input: [5, 10, 15], expected: [5, 15, 30] },
    { input: [2, 4, 6, 8], expected: [2, 6, 12, 20] },
];

function runTests() {
    let passed = 0;
    let failed = 0;

    testCases.forEach((testCase, index) => {
        const result = add(testCase.input);
        if (arraysEqual(result, testCase.expected)) {
            console.log(`Test ${index + 1}: PASSED`);
            passed++;
        } else {
            console.log(`Test ${index + 1}: FAILED`);
            console.log(`  Expected: ${testCase.expected}`);
            console.log(`  Actual:   ${result}`);
            failed++;
        }
    });

    console.log(`\nTests completed. ${passed} passed, ${failed} failed.`);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Run the tests
runTests();