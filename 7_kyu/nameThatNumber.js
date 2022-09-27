//===== Description
// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!


// ===== My solution
function nameThatNumber(num) {
    let arrNum = Array.from(String(num)).map(i => Number(i));

    let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];

    let arr2 = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
        "eighty", "ninety"];

    if (num == 20 || num == 30 || num == 40 || num == 50 || num == 60 || num == 70 || num == 80 || num == 90) return arr2[arrNum[0]];

    return (num >= 20 && num <= 99) ? `${arr2[arrNum[0]]} ${arr1[arrNum[1]]}` : arr1[num];
}

// ===== Test
console.log(nameThatNumber(20))  // returns "twenty"
console.log(nameThatNumber(99))  // returns "ninety nine"
console.log(nameThatNumber(88))  // returns "eighty eight"
console.log(nameThatNumber(54))  // returns "fifty four"