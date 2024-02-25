// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}

// Tests for the areYouPlayingBanjo function
function testAreYouPlayingBanjo() {
    console.log("Testing of the areYouPlayingBanjo function has started.");

    // Test 1: Name starts with 'r'
    let result = areYouPlayingBanjo("rick");
    console.assert(result === "rick plays banjo", `Expected result: "rick plays banjo", received result: ${result}`);

    // Test 2: Name starts with 'R'
    result = areYouPlayingBanjo("Rick");
    console.assert(result === "Rick plays banjo", `Expected result: "Rick plays banjo", received result: ${result}`);

    // Test 3: Name does not start with 'r' or 'R'
    result = areYouPlayingBanjo("paul");
    console.assert(result === "paul does not play banjo", `Expected result: "paul does not play banjo", received result: ${result}`);

    // Test 4: Name starts with another uppercase letter, not 'R'
    result = areYouPlayingBanjo("Paul");
    console.assert(result === "Paul does not play banjo", `Expected result: "Paul does not play banjo", received result: ${result}`);

    console.log("Testing of the areYouPlayingBanjo function is complete.");
}

// Running the tests
testAreYouPlayingBanjo();