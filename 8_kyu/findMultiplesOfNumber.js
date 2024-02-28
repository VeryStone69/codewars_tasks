// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples
// up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//
//     For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the
// multiples of 2 up to 6.

function findMultiples(integer, limit) {
    let  out = [integer];
    for (let i = integer*2; i <= limit; i+=integer) {
        out.push(i)
    }
    return out;
}

function testFindMultiples() {
    const testCases = [
        { integer: 2, limit: 6, expected: [2, 4, 6] },
        { integer: 3, limit: 10, expected: [3, 6, 9] },
        { integer: 5, limit: 25, expected: [5, 10, 15, 20, 25] },
        { integer: 1, limit: 2, expected: [1, 2] },
        { integer: 10, limit: 100, expected: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
        { integer: 4, limit: 27, expected: [4, 8, 12, 16, 20, 24] },
        { integer: 11, limit: 50, expected: [11, 22, 33, 44] },
    ];

    testCases.forEach(({ integer, limit, expected }, index) => {
        const result = findMultiples(integer, limit);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
        if (!passed) {
            console.log(` Expected: ${expected}, Got: ${result}`);
        }
    });
}

testFindMultiples();