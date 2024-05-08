// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const result = []
    for (let i =0;i<string.length;i++){
        if (string[i] !== string[i].toUpperCase()){
            result.push(string[i])
        } else {
            result.push(` `)
            result.push(`${string[i]}`)
        }
    }
    return result.join("");
}

function testSolution() {
    const testCases = [
        { input: "helloWorld", expected: "hello World" },
        { input: "abcXYZ", expected: "abc X Y Z" },
        { input: "helloWorld", expected: "hello World" },
        { input: "aBcDeF", expected: "a Bc De F" },
        { input: "camelCasing", expected: "camel Casing" },
        { input: "camelCasingTest", expected: "camel Casing Test" },
    ];

    for (const testCase of testCases) {
        const result = solution(testCase.input);
        const pass = result === testCase.expected;
        if (pass) {
            console.log(`Test passed for input "${testCase.input}"`);
        } else {
            console.error(`Test failed for input "${testCase.input}". Expected "${testCase.expected}", but got "${result}"`);
        }
    }
}

// Run the tests
testSolution();