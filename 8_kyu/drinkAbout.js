// Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.
//     Make a function that receive age, and return what they drink.
//
//     Rules:
//
// Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.
//     Examples: (Input --> Output)
//
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy";
    } else if (old >= 14 && old < 18) {
        return "drink coke";
    } else if (old >= 18 && old < 21) {
        return "drink beer";
    }
    return 'drink whisky';
};


function runTest(testName, testFunction) {
    try {
        testFunction();
        console.log(`Test passed: ${testName}`);
    } catch (error) {
        console.error(`Test failed: ${testName}`);
        console.error(error);
    }
}

// Test: Should return "drink toddy" for age 13
runTest("Should return 'drink toddy' for age 13", function () {
    let result = peopleWithAgeDrink(13);
    if (result !== "drink toddy") {
        throw new Error(`Expected 'drink toddy', but got ${result}`);
    }
});

// Test: Should return "drink coke" for age 17
runTest("Should return 'drink coke' for age 17", function () {
    let result = peopleWithAgeDrink(17);
    if (result !== "drink coke") {
        throw new Error(`Expected 'drink coke', but got ${result}`);
    }
});

// Test: Should return "drink beer" for age 18
runTest("Should return 'drink beer' for age 18", function () {
    let result = peopleWithAgeDrink(18);
    if (result !== "drink beer") {
        throw new Error(`Expected 'drink beer', but got ${result}`);
    }
});

// Test: Should return "drink beer" for age 20
runTest("Should return 'drink beer' for age 20", function () {
    let result = peopleWithAgeDrink(20);
    if (result !== "drink beer") {
        throw new Error(`Expected 'drink beer', but got ${result}`);
    }
});

// Test: Should return "drink whisky" for age 21
runTest("Should return 'drink whisky' for age 21", function () {
    let result = peopleWithAgeDrink(21);
    if (result !== "drink whisky") {
        throw new Error(`Expected 'drink whisky', but got ${result}`);
    }
});

// Test: Should return "drink whisky" for age 30
runTest("Should return 'drink whisky' for age 30", function () {
    let result = peopleWithAgeDrink(30);
    if (result !== "drink whisky") {
        throw new Error(`Expected 'drink whisky', but got ${result}`);
    }
});
