//====== Decision
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//====== Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// ====== My solution
function reverseWords(str) {

    let str2 = str.split(" ");
    let temp = [];

    for (let i = 0; i < str2.length; i++) {
        temp.push(str2[i].split("").reverse().join(""));
    }
    let out = temp.join(" ");
    return out;

}


//===== Test
console.log(reverseWords('double  spaced  words')); //'elbuod  decaps  sdrow'
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));  //'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('a b c d')); //'a b c d'