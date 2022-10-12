// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    let out = "";
    for (let i = 0; i < numbers.length; i++) {
        if (i == 0) out += "(" + numbers[i];
        if (i == 2) out += numbers[i] + ")" + " ";
        if (i == 1 || i == 3 || i == 4 || i > 5 && i <= 9) out += numbers[i];
        if (i == 5) out += numbers[i] + "-";
    }
    return out;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
