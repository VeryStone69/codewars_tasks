// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of
// the following phrases each time a petal was torn:
//
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
//
//     When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
//     Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given
// number of petals. The number of petals is always greater than 0.


function howMuchILoveYou(nbPetals) {
    const arrPrase = ["I love you","a little","a lot","passionately","madly","not at all"]
    return arrPrase[(nbPetals -1 ) % 6]
}

function runTests() {
    const testCases = [
        { petals: 1, expected: "I love you" },
        { petals: 2, expected: "a little" },
        { petals: 3, expected: "a lot" },
        { petals: 4, expected: "passionately" },
        { petals: 5, expected: "madly" },
        { petals: 6, expected: "not at all" },
        { petals: 7, expected: "I love you" },
        { petals: 8, expected: "a little" },
        { petals: 12, expected: "not at all" },
        { petals: 13, expected: "I love you" },
        { petals: 18, expected: "not at all" },
        { petals: 19, expected: "I love you" },
    ];

    testCases.forEach(({ petals, expected }, index) => {
        const result = howMuchILoveYou(petals);
        const passed = result === expected;
        console.log(`Test case ${index + 1}: ${passed ? "PASSED" : "FAILED"}`);
        if (!passed) {
            console.log(`  Expected "${expected}" but got "${result}"`);
        }
    });
}

runTests();