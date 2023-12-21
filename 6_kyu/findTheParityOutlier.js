// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
//
//     [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    let evenCount = 0;
    let oddCount = 0;
    let lastEven, lastOdd;

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenCount++;
            lastEven = integers[i];
        } else {
            oddCount++;
            lastOdd = integers[i];
        }

        if ((oddCount > 1 && evenCount === 1) || (evenCount > 1 && oddCount === 1)) {
            break;
        }
    }

    return evenCount === 1 ? lastEven : lastOdd;
}

findOutlier([160, 3, 1719, 19, 11, 13, -21])
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])