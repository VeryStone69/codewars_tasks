// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the
// function given.
//
// The solution would work like the following:
//
//     getEvenNumbers([2,4,5,6]) // should == [2,4,6]


function getEvenNumbers(numbersArray){
    return numbersArray.filter(el => !( el % 2 ));
}

function testGetEvenNumbers() {
    // Test case 1: Empty array
    let numbers = [];
    let result = getEvenNumbers(numbers);
    console.log('Test case 1:', result); // Expected output: []

    // Test case 2: Array with even numbers
    numbers = [2, 4, 6, 8];
    result = getEvenNumbers(numbers);
    console.log('Test case 2:', result); // Expected output: [2, 4, 6, 8]

    // Test case 3: Array with odd numbers
    numbers = [1, 3, 5, 7];
    result = getEvenNumbers(numbers);
    console.log('Test case 3:', result); // Expected output: []

    // Test case 4: Array with mixed even and odd numbers
    numbers = [1, 2, 3, 4, 5, 6];
    result = getEvenNumbers(numbers);
    console.log('Test case 4:', result); // Expected output: [2, 4, 6]

    // Test case 5: Array with negative numbers
    numbers = [-2, -3, -4, -5];
    result = getEvenNumbers(numbers);
    console.log('Test case 5:', result); // Expected output: [-2, -4]

    // Test case 6: Array with zero
    numbers = [0];
    result = getEvenNumbers(numbers);
    console.log('Test case 6:', result); // Expected output: [0]
}

// Run tests
testGetEvenNumbers();