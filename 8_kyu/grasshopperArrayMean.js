// Find Mean
//     Find the mean (average) of a list of numbers in an array.
//
// Information
//     To find the mean (average) of a set of numbers add all of the numbers together and divide by the number
//     of values in the list.
//
//     For an example list of 1, 3, 5, 7
//
// 1. Add all of the numbers
//
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
//
// 16/4 = 4
// 3. The mean (or average) of this list is 4

const findAverage = (nums) => {
    return nums.reduce((accum,value)=> accum + value) / nums.length
}

console.log(findAverage([1, 2, 3, 4, 5]) === 3 ? 'Test 1 Passed' : 'Test 1 Failed');

// Тест 2: Проверка на работоспособность с массивом отрицательных чисел
console.log(findAverage([-1, -2, -3, -4, -5]) === -3 ? 'Test 2 Passed' : 'Test 2 Failed');

// Тест 3: Проверка на работоспособность с массивом смешанных чисел
console.log(findAverage([-1, 0, 1, 2, 3]) === 1 ? 'Test 3 Passed' : 'Test 3 Failed');

// Тест 4: Проверка на работоспособность с массивом из одного элемента
console.log(findAverage([5]) === 5 ? 'Test 4 Passed' : 'Test 4 Failed');
