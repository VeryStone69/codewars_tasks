// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
//     Example(Input --> Output)
//
//     "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//
//     Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    console.log(str.split(' ').map(el=>`${el} ${el.length}`))
    return str.split(' ').map(el=>`${el} ${el.length}`);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

(function testEmptyString() {
    const input = "";
    const expectedOutput = [" 0"];
    const output = addLength(input);
    console.log(arraysEqual(output, expectedOutput) ? "Test 1 Passed" : "Test 1 Failed");
})();

(function testSingleWord() {
    const input = "hello";
    const expectedOutput = ["hello 5"];
    const output = addLength(input);
    console.log(arraysEqual(output, expectedOutput) ? "Test 2 Passed" : "Test 2 Failed");
})();

(function testMultipleWords() {
    const input = "hello world";
    const expectedOutput = ["hello 5", "world 5"];
    const output = addLength(input);
    console.log(arraysEqual(output, expectedOutput) ? "Test 3 Passed" : "Test 3 Failed");
})();

(function testDifferentWordLengths() {
    const input = "Hi this is a test";
    const expectedOutput = ["Hi 2", "this 4", "is 2", "a 1", "test 4"];
    const output = addLength(input);
    console.log(arraysEqual(output, expectedOutput) ? "Test 4 Passed" : "Test 4 Failed");
})();

(function testLeadingTrailingSpaces() {
    const input = "  leading and trailing  ";
    const expectedOutput = ["leading 7", "and 3", "trailing 8"];
    const output = addLength(input.trim());
    console.log(arraysEqual(output, expectedOutput) ? "Test 5 Passed" : "Test 5 Failed");
})();