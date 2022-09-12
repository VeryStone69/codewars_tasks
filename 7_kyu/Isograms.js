//===== DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//===== Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//===== My solution
function isIsogram(str) {
    let x = new Set(str.toLowerCase());
    return (x.size == str.length) ? true : false;
}

//===== Tests
isIsogram("isogram")// true
isIsogram("moose")// false
isIsogram("isIsogram")// false
isIsogram("aba")// false, "same chars may not be adjacent"
isIsogram("moOse")// false, "same chars may not be same case"
isIsogram("thumbscrewjapingly")// true
isIsogram("")// true, "an empty string is a valid isogram"