// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  if (number > 0) return -number;
  if (number < 0) return Math.abs(number);
  else return number;
}

console.log(opposite(-10));
console.log(opposite(10));
console.log(opposite(0));
