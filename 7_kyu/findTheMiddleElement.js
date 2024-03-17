// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the
//  numerical element that lies between the other two elements.
//
//     The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
//     gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
    // let sortArray = .indexOf()

    return triplet.indexOf([...triplet].sort((a,b)=> a-b)[1])
}

function testGimme() {
    const testCases = [
        {input: [2, 3, 1], expected: 0},
        {input: [5, 10, 14], expected: 1},
        {input: [0.1, 0.5, 0.2], expected: 2},
        {input: [-10, -5, -15], expected: 0},
        {input: [42, 84, 21], expected: 0},
        {input: [1.5, 1.2, 1.8], expected: 0},
    ];

    testCases.forEach((testCase, index) => {
        const {input, expected} = testCase;
        const result = gimme(input);
        if (result === expected) {
            console.log(`Test ${index + 1} passed: gimme([${input}]) === ${expected}`);
        } else {
            console.error(`Test ${index + 1} failed: gimme([${input}]) expected ${expected}, but got ${result}`);
        }
    });
}

// Run the tests
testGimme();