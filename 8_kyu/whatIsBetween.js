// Complete the function that takes two integers (a, b, where a < b) and return an array of all
// integers between the input parameters, including them.
//
//     For example:
//
//     a = 1
//     b = 4
//     --> [1, 2, 3, 4]

function between(a, b) {
    const result = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result;
}
function testBetween() {
    // Test 1: Positive integers
    let input1 = [1, 5];
    let expected1 = [1, 2, 3, 4, 5];
    let result1 = between(...input1);
    console.log(JSON.stringify(result1) === JSON.stringify(expected1) ? "Test 1 Passed" : "Test 1 Failed");

    // Test 2: Negative integers
    let input2 = [-3, 2];
    let expected2 = [-3, -2, -1, 0, 1, 2];
    let result2 = between(...input2);
    console.log(JSON.stringify(result2) === JSON.stringify(expected2) ? "Test 2 Passed" : "Test 2 Failed");

    // Test 3: Start and end are the same
    let input3 = [10, 10];
    let expected3 = [10];
    let result3 = between(...input3);
    console.log(JSON.stringify(result3) === JSON.stringify(expected3) ? "Test 3 Passed" : "Test 3 Failed");

    // Test 4: Start is greater than end
    let input4 = [7, 3];
    let expected4 = [];
    let result4 = between(...input4);
    console.log(JSON.stringify(result4) === JSON.stringify(expected4) ? "Test 4 Passed" : "Test 4 Failed");

    // Test 5: Start and end are both negative
    let input5 = [-5, -2];
    let expected5 = [-5, -4, -3, -2];
    let result5 = between(...input5);
    console.log(JSON.stringify(result5) === JSON.stringify(expected5) ? "Test 5 Passed" : "Test 5 Failed");
}

testBetween();
