// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of
// each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    return String(Math.abs(number)).split("").reduce((accum, value) => accum + Number(value),0);
}

function testSumDigits() {
    console.log('Test 1: sumDigits(123) === 6');
    console.log(sumDigits(123) === 6 ? 'passed' : 'failed');

    console.log('Test 2: sumDigits(-456) === 15');
    console.log(sumDigits(-456) === 15 ? 'passed' : 'failed');

    console.log('Test 3: sumDigits(0) === 0');
    console.log(sumDigits(0) === 0 ? 'passed' : 'failed');

    console.log('Test 4: sumDigits(123456789) === 45');
    console.log(sumDigits(123456789) === 45 ? 'passed' : 'failed');
}

testSumDigits();