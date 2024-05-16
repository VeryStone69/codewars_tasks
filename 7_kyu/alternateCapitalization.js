// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
//     and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!
//
//     If you like this Kata, please try:

function capitalize(s){
    let evenLetter = '';
    let oddLetter = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            evenLetter += s[i].toUpperCase();
            oddLetter += s[i];
        } else {
            evenLetter += s[i];
            oddLetter += s[i].toUpperCase();
        }
    }
    return [evenLetter, oddLetter];
}

function testCapitalize() {
    // Test 1: Basic test with a string of even length
    let input1 = "abcdef";
    let expected1 = ["AbCdEf", "aBcDeF"];
    let result1 = capitalize(input1);
    console.log(result1[0] === expected1[0] && result1[1] === expected1[1] ? "Test 1 Passed" : "Test 1 Failed");

    // Test 2: Basic test with a string of odd length
    let input2 = "abcde";
    let expected2 = ["AbCdE", "aBcDe"];
    let result2 = capitalize(input2);
    console.log(result2[0] === expected2[0] && result2[1] === expected2[1] ? "Test 2 Passed" : "Test 2 Failed");

    // Test 3: Test with an empty string
    let input3 = "";
    let expected3 = ["", ""];
    let result3 = capitalize(input3);
    console.log(result3[0] === expected3[0] && result3[1] === expected3[1] ? "Test 3 Passed" : "Test 3 Failed");

    // Test 4: Test with a string containing only one character
    let input4 = "a";
    let expected4 = ["A", "a"];
    let result4 = capitalize(input4);
    console.log(result4[0] === expected4[0] && result4[1] === expected4[1] ? "Test 4 Passed" : "Test 4 Failed");

    // Test 5: Test with a string containing special characters
    let input5 = "!@#$%";
    let expected5 = ["!@#$%", "!@#$%"];
    let result5 = capitalize(input5);
    console.log(result5[0] === expected5[0] && result5[1] === expected5[1] ? "Test 5 Passed" : "Test 5 Failed");

    // Test 6: Test with a string containing numbers
    let input6 = "12345";
    let expected6 = ["12345", "12345"];
    let result6 = capitalize(input6);
    console.log(result6[0] === expected6[0] && result6[1] === expected6[1] ? "Test 6 Passed" : "Test 6 Failed");
}

testCapitalize();
