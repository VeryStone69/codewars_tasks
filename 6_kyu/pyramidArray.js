//===== Pyramid Array
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

//====== My solution
function pyramid(n) {
    let arr = [];
    let arrTemp = [];

    for (let i = 1; i <= n; i++) {
        let count = 0;
        while (count < i) {
            arrTemp.push(1)
            count++;
        }
        arr.push(arrTemp);
        arrTemp = [];
    }

    return arr;
}


//====== Tests
console.log(pyramid(1));
console.log(pyramid(2));
console.table(pyramid(3));