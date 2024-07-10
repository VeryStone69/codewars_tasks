// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    const match = strng.match(/(\d+)$/);
    if (!match) {
        return strng + "1";
    }
    const base = strng.slice(0, -match[0].length);
    const number = match[0];
    let incrementedNumber = (parseInt(number, 10) + 1).toString();
    while (incrementedNumber.length < number.length) {
        incrementedNumber = '0' + incrementedNumber;
    }

    return base + incrementedNumber;
}
function runTests() {
    const tests = [
        { input: "foo", expected: "foo1" },
        { input: "foobar23", expected: "foobar24" },
        { input: "foobar000", expected: "foobar001" },
        { input: "foo9", expected: "foo10" },
        { input: "foo099", expected: "foo100" },
        { input: "bar001", expected: "bar002" },
        { input: "baz000", expected: "baz001" },
        { input: "test", expected: "test1" },
        { input: "test123", expected: "test124" },
        { input: "num007", expected: "num008" },
    ];

    let allPassed = true;

    for (const test of tests) {
        const result = incrementString(test.input);
        if (result !== test.expected) {
            console.error(`Test failed for input "${test.input}": expected "${test.expected}", but got "${result}"`);
            allPassed = false;
        } else {
            console.log(`Test passed for input "${test.input}": got "${result}"`);
        }
    }

    if (allPassed) {
        console.log("All tests passed!");
    } else {
        console.log("Some tests failed.");
    }
}

runTests();