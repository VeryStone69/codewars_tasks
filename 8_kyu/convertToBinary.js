// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
//
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
//
//     toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */


function toBinary(n){
    return +n.toString(2);
}

function testToBinary() {
    // Test 1: Test with a positive integer
    let input1 = 10;
    let expected1 = 1010;
    let result1 = toBinary(input1);
    console.log(result1 === expected1 ? "Test 1 Passed" : "Test 1 Failed");

    // Test 2: Test with zero
    let input2 = 0;
    let expected2 = 0;
    let result2 = toBinary(input2);
    console.log(result2 === expected2 ? "Test 2 Passed" : "Test 2 Failed");

    // Test 3: Test with a negative integer
    let input3 = -5;
    let expected3 = -101;
    let result3 = toBinary(input3);
    console.log(result3 === expected3 ? "Test 3 Passed" : "Test 3 Failed");

    // Test 4: Test with a floating-point number
    let input4 = 3.5;
    let expected4 = 11;
    let result4 = toBinary(input4);
    console.log(result4 === expected4 ? "Test 4 Passed" : "Test 4 Failed");

    // Test 5: Test with a large integer
    let input5 = 1024;
    let expected5 = 10000000000;
    let result5 = toBinary(input5);
    console.log(result5 === expected5 ? "Test 5 Passed" : "Test 5 Failed");
}

testToBinary();
