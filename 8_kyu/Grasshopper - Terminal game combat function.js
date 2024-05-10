// Create a combat function that takes the player's current health and the amount of damage recieved, ' +
// 'and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage;
}

function testCombat() {
    // Testing the case where the damage is less than the current health.
    let result = combat(100, 20);
    if (result === 80) {
        console.log("Test 1 passed successfully");
    } else {
        console.log("Test 3 failed: expected 80, received " + result);
    }

    // Testing the case where the damage is greater than or equal to the current health.
    result = combat(30, 50);
    if (result === 0) {
        console.log("Test 2 passed successfully");
    } else {
        console.log("Test 2 failed: expected 0, received " + result);
    }

    // Testing the case where the damage is equal to 0.
    result = combat(50, 0);
    if (result === 50) {
        console.log("Test 3 passed successfully");
    } else {
        console.log("Test 3 failed: expected 50, received " + result);
    }
}

testCombat();