// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. ' +
// 'Since James doesn't know how to make this happen, he needs your help.
//
//     Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
//     Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or
// negative size.
//
// Examples
// A size 3 diamond:
//
//      *
//     ***
//      *
// ...which would appear as a string of " *\n***\n *\n"
//
// A size 5 diamond:
//
//     *
//    ***
//   *****
//    ***
//     *
// ...that is:
//
//     "  *\n ***\n*****\n ***\n  *\n"

// function diamond(n){
//     let tempArr = [];
//     for (let stars = 1; stars <= n; stars += 2){
//         let space = n - stars; // 5 - 1 == 4
//         let spaceString = ''
//         for (let k = space/2; k >= 1; k--) {
//             spaceString +=" ";
//         }
//         for (let j = stars; j > 0; j--) {
//             if (j === 1) {
//                 for (let k = space/2; k >= 1; k--) {
//                     spaceString +=" ";
//                 }
//                 spaceString+="\n"
//             } else {
//                 spaceString +="*"
//             }
//         }
//     tempArr.push(spaceString)
//     }
//     return [...tempArr, ...tempArr.pop().reverse()].join("");
// }

function diamond(n) {
    if (n % 2 === 0 || n < 0) return null;
    let diamondStr = '';

    const spaceStar = (i, n) => {
        const spaces = ' '.repeat((n - i) / 2);
        const stars = '*'.repeat(i);
        diamondStr += spaces + stars + '\n';
    }

    for (let i = 1; i <= n; i += 2) {spaceStar(i, n)}
    for (let i = n - 2; i >= 1; i -= 2) {spaceStar(i, n)}

    return diamondStr;
}


function testDiamond() {
    const testCases = [
        { input: 3, expected: ' *\n***\n *\n' },
        { input: 5, expected: '  *\n ***\n*****\n ***\n  *\n' },
        { input: -1, expected: null },
        { input: 4, expected: null },
    ];

    for (const testCase of testCases) {
        console.log(`Testing diamond(${testCase.input})...`);
        const result = diamond(testCase.input);
        if (result === testCase.expected) {
            console.log(`Test passed!`);
        } else {
            console.log(`Test failed! Expected: ${testCase.expected}, but got: ${result}`);
        }
    }
}

testDiamond();