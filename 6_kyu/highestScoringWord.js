// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the
//      original string.
//
//     All letters will be lowercase and all inputs will be valid.

const alphabet = {};
const letters = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < letters.length; i++) {
    alphabet[letters[i]] = i + 1;
}

function high(x) {
    let arrStr = x.split(" ")

    let out = {
        word: "",
        num: 0
    }

    for (let i = 0; i < arrStr.length; i++) {
        let tempChange = 0;

        for (let k = 0; k < arrStr[i].length; k++) {
            tempChange += alphabet[arrStr[i][k]]
        }

        if (tempChange > out.num) {
            out.num = tempChange;
            out.word = arrStr[i]
        }
    }
    return out.word;
}

console.log(high('take me to semynak'))
console.log(high('what time are we climbing up the volcano'))