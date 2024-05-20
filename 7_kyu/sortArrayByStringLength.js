// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
//     ordered from shortest to longest.
//
//     For example, if this array were passed as an argument:
//
//     ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
//     ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how
// to order multiple strings of the same length.


function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
}

function runTests() {
    let passedTests = 0;
    let failedTests = 0;

    // Test 1: Check sorting of an array of strings by length
    const test1Array = ["apple", "banana", "orange", "kiwi"];
    const test1ExpectedResult = ["kiwi", "apple", "banana", "orange"];
    const test1Result = sortByLength(test1Array);
    if (JSON.stringify(test1Result) === JSON.stringify(test1ExpectedResult)) {
        console.log("Test 1 Passed");
        passedTests++;
    } else {
        console.log("Test 1 Failed");
        failedTests++;
    }

    // Test 2: Check sorting of an empty array
    const test2Array = [];
    const test2ExpectedResult = [];
    const test2Result = sortByLength(test2Array);
    if (JSON.stringify(test2Result) === JSON.stringify(test2ExpectedResult)) {
        console.log("Test 2 Passed");
        passedTests++;
    } else {
        console.log("Test 2 Failed");
        failedTests++;
    }

    // Test 3: Check sorting of an array with one element
    const test3Array = ["test"];
    const test3ExpectedResult = ["test"];
    const test3Result = sortByLength(test3Array);
    if (JSON.stringify(test3Result) === JSON.stringify(test3ExpectedResult)) {
        console.log("Test 3 Passed");
        passedTests++;
    } else {
        console.log("Test 3 Failed");
        failedTests++;
    }

    // Output overall test results
    console.log("Total tests: " + (passedTests + failedTests));
    console.log("Passed: " + passedTests);
    console.log("Failed: " + failedTests);
}

// Run the tests
runTests();