// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
//     ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special
// characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet
// should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    let messageArr = message.split("")
    let outArr = [];
    for (let i = 0; i < messageArr.length; i++) {
        let charCode = messageArr[i].charCodeAt(0);
        if (charCode > 96 && charCode < 123) {
            outArr.push(encodeChar(charCode, 96, 122))
        }
        else if (charCode > 64 && charCode < 91) {
            outArr.push(encodeChar(charCode, 64, 90))
        }
        else outArr.push(messageArr[i])
    }
    return outArr.join("")
}

function encodeChar(charCode, start, end) {
    let sum = charCode + 13;
    if (sum > end) {
        return String.fromCharCode((sum - end) + start);
    } else {
        return String.fromCharCode(sum);
    }
}

console.log(rot13("test"))