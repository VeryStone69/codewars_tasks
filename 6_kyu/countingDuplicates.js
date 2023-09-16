// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//
function duplicateCount(text) {

    let outCount = 0;
    const textToLowerCase = text.toLowerCase().split("");
    const outObj = {};
    for (let i = 0; i < textToLowerCase.length; i++) {
        outObj.hasOwnProperty(textToLowerCase[i]) ? outObj[textToLowerCase[i]] += 1 : outObj[textToLowerCase[i]] = 1
    }
    for (let key in outObj) {
        if (outObj[key] > 1) outCount += 1;
    }
    return outCount;

}
console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("Indivisibilities"))  // 2
console.log(duplicateCount("Indivisibility"))  // 1
