// Write a function which takes a number and returns the corresponding ASCII char for that value.
//
//     Example:
//
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

function getChar(c) {
    return String.fromCharCode(c)
}

function testGetChar() {
    let passedAllTests = true;

    // Test 1: Check that for code 65 it returns 'A'
    const test1 = getChar(65) === 'A';
    if (!test1) {
        console.log('Test 1 failed');
        passedAllTests = false;
    }

    // Test 2: Check that for code 97 it returns 'a'
    const test2 = getChar(97) === 'a';
    if (!test2) {
        console.log('Test 2 failed');
        passedAllTests = false;
    }

    // Test 3: Check that for code 48 it returns '0'
    const test3 = getChar(48) === '0';
    if (!test3) {
        console.log('Test 3 failed');
        passedAllTests = false;
    }

    // Return the result of all tests
    return passedAllTests;
}

const allTestsPassed = testGetChar();
console.log(`All tests ${allTestsPassed ? 'passed' : 'failed'}`);
