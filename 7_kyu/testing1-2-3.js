// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//     The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//     Examples: (Input --> Output)
//
//     [] --> []
//     ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array){
    return array.length
        ? array.map((el,index)=>el=`${index+1}: ${el}`)
        : array
}

function runTests() {
    let passed = 0;
    let failed = 0;

    function assertEquals(actual, expected, testName) {
        if (JSON.stringify(actual) === JSON.stringify(expected)) {
            console.log(`Passed: ${testName}`);
            passed++;
        } else {
            console.log(`Failed: ${testName}`);
            console.log(`  Expected: ${JSON.stringify(expected)}`);
            console.log(`  Got: ${JSON.stringify(actual)}`);
            failed++;
        }
    }

    // Test cases
    assertEquals(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], "Test Case 1: Non-empty array");
    assertEquals(number([]), [], "Test Case 2: Empty array");
    assertEquals(number(["apple", "banana", "cherry"]), ["1: apple", "2: banana", "3: cherry"], "Test Case 3: Array of fruits");
    assertEquals(number(["one"]), ["1: one"], "Test Case 4: Single element array");
    assertEquals(number(["test", "case", "number"]), ["1: test", "2: case", "3: number"], "Test Case 5: Array with different words");

    // Summary
    console.log(`\nTotal tests: ${passed + failed}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
}

// Run tests
runTests();