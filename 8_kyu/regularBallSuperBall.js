// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//
//     If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//
// ball1 = new Ball();
// ball2 = new Ball("super");
//
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

var Ball = function(ballType) {
    this.ballType = !!ballType ? ballType : 'regular';
};

function runTests() {
    let passed = 0;
    let failed = 0;

    function test(name, expected, actual) {
        if (expected === actual) {
            console.log(`✔️ ${name} passed`);
            passed++;
        } else {
            console.log(`❌ ${name} failed: expected "${expected}", but got "${actual}"`);
            failed++;
        }
    }

    // Тесты
    test('Test 1: Default ball type', 'regular', new Ball().ballType);
    test('Test 2: Custom ball type "super"', 'super', new Ball('super').ballType);
    test('Test 3: Custom ball type "basketball"', 'basketball', new Ball('basketball').ballType);
    test('Test 4: Custom ball type "soccer"', 'soccer', new Ball('soccer').ballType);

    console.log(`\nTests passed: ${passed}`);
    console.log(`Tests failed: ${failed}`);
}

runTests();