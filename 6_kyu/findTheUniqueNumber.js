// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
//     The tests contain some very huge arrays, so think about performance.
//
//     This is the first kata in series:

function findUniq(arr) {
    const arrSort = arr.sort((a, b) => a - b)
    const arrSet = new Set(arr)
    return [...arrSet][0] === arrSort[0] && [...arrSet][0] === arrSort[1] ? [...arrSet][1] : [...arrSet][0]
}


console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([1, 1, 2, 1, 1]))
console.dir(findUniq([3, 10, 3, 3, 3]))