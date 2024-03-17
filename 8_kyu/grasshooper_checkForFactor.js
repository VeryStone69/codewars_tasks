// This function should test if the factor is a factor of base.
//
//Return true if it is a factor or false if it is not.
//
// About factors
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
//
// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    return base%factor? false: true;
}
console.assert(checkForFactor(100, 10) === true, "Test 1 failed: 10 should be a factor of 100");
console.assert(checkForFactor(9, 5) === false, "Test 2 failed: 5 should not be a factor of 9");
console.assert(checkForFactor(15, 3) === true, "Test 3 failed: 3 should be a factor of 15");
console.assert(checkForFactor(20, 7) === false, "Test 4 failed: 7 should not be a factor of 20");
console.assert(checkForFactor(1, 1) === true, "Test 5 failed: 1 should be a factor of 1");
console.assert(checkForFactor(5, 5) === true, "Test 6 failed: 5 should be a factor of 5");

console.log("All tests completed");