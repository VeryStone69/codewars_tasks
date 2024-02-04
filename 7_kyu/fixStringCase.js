// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is
// to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//
//     solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//     solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//     solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === s[i].toUpperCase() ? counter++ : counter--
    }
    return counter <= 0 ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));