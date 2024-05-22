
//  Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
//
//Examples:
//  n = 17
//  m = 5
//  result = 2 (remainder of `17 / 5`)
//
//  n = 13
//  m = 72
//  result = 7 (remainder of `72 / 13`)
//
//  n = 0
//  m = -1
//  result = 0 (remainder of `0 / -1`)
//
//  n = 0
//  m = 1
//  result - division by zero (refer to the specifications on how to handle this in your language)

// Function remainder
function remainder(n, m) {
    return n > m ? n % m : m % n;
}


function runTests() {
    // Helper function to check equality
    function assertEqual(actual, expected, testName) {
        if (actual === expected) {
            console.log(`Passed: ${testName}`);
        } else {
            console.error(`Failed: ${testName}. Expected ${expected}, but got ${actual}`);
        }
    }

    // Test 1: n is greater than m
    let result = remainder(10, 3);
    let expected = 10 % 3;
    assertEqual(result, expected, "Test 1: n is greater than m");

    // Test 2: m is greater than n
    result = remainder(3, 10);
    expected = 10 % 3;
    assertEqual(result, expected, "Test 2: m is greater than n");

    // Test 3: n is equal to m
    result = remainder(5, 5);
    expected = 5 % 5;
    assertEqual(result, expected, "Test 3: n is equal to m");

    // Test 4: n is greater than m with zero remainder
    result = remainder(12, 4);
    expected = 12 % 4;
    assertEqual(result, expected, "Test 4: n is greater than m with zero remainder");

    // Test 5: m is greater than n with zero remainder
    result = remainder(4, 12);
    expected = 12 % 4;
    assertEqual(result, expected, "Test 5: m is greater than n with zero remainder");

    // Test 6: n is zero
    try {
        result = remainder(0, 10);
        expected = 10 % 0; // This will cause a divide by zero error
        assertEqual(result, expected, "Test 6: n is zero");
    } catch (e) {
        console.log("Passed: Test 6: n is zero - Caught expected error");
    }

    // Test 7: m is zero
    try {
        result = remainder(10, 0);
        expected = 10 % 0; // This will cause a divide by zero error
        assertEqual(result, expected, "Test 7: m is zero");
    } catch (e) {
        console.log("Passed: Test 7: m is zero - Caught expected error");
    }
}

runTests();
