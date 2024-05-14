// Messi goals function
// Messi is a soccer player with goals in three leagues:
//
//     LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
//
//     Note: the input will always be valid.
//
//     For example:
//
//     5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [...arguments].reduce((accum,value)=>accum+value)
}

function testGoals() {
    const result = goals(3, 4, 2);
    const expected = 9;

    if (result === expected) {
        console.log('✅ Test passed: the function returned the expected sum of goals');
    } else {
        console.error('❌ Test failed: the function returned an incorrect result');
    }
}

function testZeroGoals() {
    const result = goals(0, 0, 0);
    const expected = 0;

    if (result === expected) {
        console.log('✅ Test passed: the function returned 0 for all arguments equal to 0');
    } else {
        console.error('❌ Test failed: the function returned an incorrect result');
    }
}

testGoals();
testZeroGoals();

