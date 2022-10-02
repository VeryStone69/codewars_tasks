//===== Description
// Your task, is to create NxN multiplication table, of size provided in parameter.

//===== for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

//===== My solution
multiplicationTable = function (size) {
    let arrWrap = [];

    for (let i = 1; i <= size; i++) {
        let arr = [];
        for (let k = 1; k <= size; k++) {

            arr.push(i * k)
        }
        arrWrap.push(arr);
    }
    return arrWrap;
}

//===== Tests
console.log(multiplicationTable(3)); //[[1,2,3], [2,4,6], [3,6,9]]
console.log(multiplicationTable(4)); //[[1,2,3,4], [2,4,6,8], [3,6,9,12],[4,8,12,16]]