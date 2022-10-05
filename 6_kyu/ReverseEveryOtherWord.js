//===== Reverse every other word in the string
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// ===== My solution
function reverse(str) {
    if (str.trim() == '') return str.trim();
    let temp = str.split(" ");
    let outStr = temp.map((item, i, temp) => {
        if (i & 1 == 1) return item.split("").reverse().join("");
        return item
    });

    return outStr.join(" ");
}

//===== Tests
console.log(reverse("Reverse this string, please!")); // "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")) //"I yllaer don't ekil reversing !sgnirts"
console.log(reverse(" ")); // ""