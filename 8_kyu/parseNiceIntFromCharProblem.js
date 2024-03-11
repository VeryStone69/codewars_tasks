// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//
// Write a program that returns the girl's age (0-9) as an integer.
//
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
//     The first character in the string is always a number.

function getAge(inputString){
    return +inputString[0];
}

function testGetAge() {
    const testCases = [
        { input: "1 year old", expected: 1 },
        { input: "5 years old", expected: 5 },
        { input: "9 years old", expected: 9 },
        { input: "0 years old", expected: 0 },
        { input: "3 years old", expected: 3 },
    ];

    testCases.forEach((testCase, index) => {
        const { input, expected } = testCase;
        const result = getAge(input);
        console.log(`Test Case ${index + 1}: ${result === expected ? "Pass" : "Fail"}`);
        if(result !== expected) {
            console.error(`Expected ${expected}, got ${result} for input "${input}"`);
        }
    });
}

// Запуск тестов
testGetAge();