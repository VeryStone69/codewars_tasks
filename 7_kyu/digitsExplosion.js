//===== DESCRIPTION:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

//===== My solution
function explode(s) {
    let out = '';
    for (let i = 0; i < s.length; i++) {
        for (let k = 0; k < s[i]; k++) {
            out += s[i];
        }
    }
    return out;
}

console.log(explode(""))  //""
console.log(explode("0")) // ""
console.log(explode("1")) // 1
console.log(explode("2")) // 22
console.log(explode("3")) // 333
console.log(explode("4")) // 4444
console.log(explode("5")) // 55555
console.log(explode("6")) // 666666
console.log(explode("7")) // 7777777
console.log(explode("8")) // 88888888
console.log(explode("9")) // 999999999
console.log(explode("000")) //""
console.log(explode("312")) //333122
console.log(explode("102269")) // 12222666666999999999"