//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
//     Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    let testArg=test.toLowerCase()
    let testNum = 0;

    let originalArg = original.toLowerCase()
    let originalNum = 0;

    for (let i = 0; i < testArg.length; i++){
        testNum+=testArg.charCodeAt(i)
    }
    for (let i = 0; i < originalArg.length; i++){
        originalNum+=originalArg.charCodeAt(i)
    }
    return testNum === originalNum
};

// Helper function for running tests
function runTest(testName, testFunction) {
    try {
        testFunction();
        console.log(`Test passed: ${testName}`);
    } catch (error) {
        console.error(`Test failed: ${testName}`);
        console.error(error);
    }
}

// Test: Should return true for anagrams 'listen' and 'silent'
runTest("Should return true for anagrams 'listen' and 'silent'", function() {
    let result = isAnagram('listen', 'silent');
    if (result !== true) {
        throw new Error(`Expected true, but got ${result}`);
    }
});

// Test: Should return false for non-anagrams 'hello' and 'world'
runTest("Should return false for non-anagrams 'hello' and 'world'", function() {
    let result = isAnagram('hello', 'world');
    if (result !== false) {
        throw new Error(`Expected false, but got ${result}`);
    }
});

// Test: Should return true for anagrams with different cases 'Listen' and 'Silent'
runTest("Should return true for anagrams with different cases 'Listen' and 'Silent'", function() {
    let result = isAnagram('Listen', 'Silent');
    if (result !== true) {
        throw new Error(`Expected true, but got ${result}`);
    }
});

// Test: Should return false for strings of different lengths 'abc' and 'abcd'
runTest("Should return false for strings of different lengths 'abc' and 'abcd'", function() {
    let result = isAnagram('abc', 'abcd');
    if (result !== false) {
        throw new Error(`Expected false, but got ${result}`);
    }
});

// Test: Should return true for empty strings
runTest("Should return true for empty strings", function() {
    let result = isAnagram('', '');
    if (result !== true) {
        throw new Error(`Expected true, but got ${result}`);
    }
});

// Test: Should return false for strings with different characters but same character codes sum 'aab' and 'abb'
runTest("Should return false for strings with different characters but same character codes sum 'aab' and 'abb'", function() {
    let result = isAnagram('aab', 'abb');
    if (result !== false) {
        throw new Error(`Expected false, but got ${result}`);
    }
});

