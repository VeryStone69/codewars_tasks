// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive
// integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception
// of type throw a RangeError (JavaScript)

function factorial(n)
{
    if (n < 0 || n > 12) {
        throw new RangeError('Input must be between 0 and 12');
    }
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function runTests() {
    let passed = 0;
    let failed = 0;

    function assertEqual(actual, expected, testName) {
        if (actual === expected) {
            console.log(`✅ ${testName}`);
            passed++;
        } else {
            console.error(`❌ ${testName}: expected ${expected}, but got ${actual}`);
            failed++;
        }
    }

    // Тесты на корректные значения
    try {
        assertEqual(factorial(0), 1, 'Factorial of 0');
        assertEqual(factorial(1), 1, 'Factorial of 1');
        assertEqual(factorial(2), 2, 'Factorial of 2');
        assertEqual(factorial(3), 6, 'Factorial of 3');
        assertEqual(factorial(4), 24, 'Factorial of 4');
        assertEqual(factorial(5), 120, 'Factorial of 5');
        assertEqual(factorial(12), 479001600, 'Factorial of 12');
    } catch (error) {
        console.error(`Error during factorial calculation: ${error.message}`);
        failed++;
    }

    // Тесты на некорректные значения
    try {
        factorial(-1);
        console.error('❌ Factorial of -1: expected RangeError');
        failed++;
    } catch (error) {
        if (error instanceof RangeError) {
            console.log('✅ Factorial of -1 throws RangeError');
            passed++;
        } else {
            console.error(`❌ Factorial of -1: expected RangeError, but got ${error}`);
            failed++;
        }
    }

    try {
        factorial(13);
        console.error('❌ Factorial of 13: expected RangeError');
        failed++;
    } catch (error) {
        if (error instanceof RangeError) {
            console.log('✅ Factorial of 13 throws RangeError');
            passed++;
        } else {
            console.error(`❌ Factorial of 13: expected RangeError, but got ${error}`);
            failed++;
        }
    }

    console.log(`\nTests passed: ${passed}`);
    console.log(`Tests failed: ${failed}`);
}

runTests();