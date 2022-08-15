// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(wordBasic) {
    let out = '';
    let charMap = {};
    let word = wordBasic.toLowerCase();

    for (let char of word) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (charMap[word[i]] > 1) out += ')';
        if (charMap[word[i]] <= 1) out += '(';
    }
    return out;
}

//===== Tests
duplicateEncode("din"); // "((("
duplicateEncode("recede"); //"()()()"
duplicateEncode("Supralapsarian"); //")()))()))))()(","should ignore case");
duplicateEncode("iiiiii"); //"))))))","duplicate-only-string"