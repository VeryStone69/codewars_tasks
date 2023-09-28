// Determine the total number of digits in the integer (n>=0) given as input to the function. For example,
//     9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
//     All inputs will be valid.



// function digits(n){
//     return n.toString().length
// }

function digits(n) {
    let out = 1;
    if (n < 10) return out;

    else {
        while (n >= 10) {
            out++;
            n = Math.floor(n/10)
        }
    }
    return out;
}

console.log(digits(12))
console.log(digits(123))
console.log(digits(1234))
console.log(digits(12345))