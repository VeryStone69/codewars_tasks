// A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
//     the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z
// at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    return new Set(string.replaceAll(/[^a-zA-Z]/g, '').toLowerCase().split("")).size === 26
}

function testIsPangram() {
    const testCases = [
        { input: "The quick brown fox jumps over the lazy dog", expected: true },
        { input: "Pack my box with five dozen liquor jugs", expected: true },
        { input: "Sphinx of black quartz, judge my vow", expected: true },
        { input: "Hello world", expected: false },
        { input: "", expected: false }
    ];

    const results = [];

    testCases.forEach((testCase, index) => {
        const result = isPangram(testCase.input);
        const pass = result === testCase.expected;
        results.push({ input: testCase.input, result: pass ? 'PASS' : 'FAIL', expected: testCase.expected });
    });

    console.log("Test Results:");
    results.forEach((result, index) => {
        console.log(`Test Case ${index + 1}: Input "${result.input}", Result: ${result.result}, Expected: ${result.expected}`);
    });

    const allPass = results.every(result => result.result === 'PASS');
    console.log(`Overall Result: ${allPass ? 'All tests PASS' : 'Some tests FAIL'}`);
}

testIsPangram();