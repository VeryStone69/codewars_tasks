//===== Description
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//===== My solution
function getCount(str) {
    count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }

    return count;
}

// Test
console.log(getCount('abracadabra')); // 5
console.log(getCount('pear tree')); // 4
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
console.log(getCount('my pyx')); // 0

