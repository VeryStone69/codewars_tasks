// Write function bmi that calculates body mass index (bmi = weight / height2).
//
//     if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if ( bmi <= 18.5 ) {
        return 'Underweight';
    } else if ( bmi <= 25 ) {
        return 'Normal';
    } else if ( bmi <= 30 ) {
        return 'Overweight';
    }
    return 'Obese';
}

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
    test('Test 1: Underweight', 'Underweight', bmi(50, 1.8)); // BMI = 15.43
    test('Test 2: Normal', 'Normal', bmi(70, 1.75)); // BMI = 22.86
    test('Test 3: Overweight', 'Overweight', bmi(85, 1.75)); // BMI = 27.76
    test('Test 4: Obese', 'Obese', bmi(100, 1.75)); // BMI = 32.65
    test('Test 5: Borderline Underweight', 'Underweight', bmi(55, 1.75)); // BMI = 17.96
    test('Test 6: Borderline Normal', 'Normal', bmi(80, 1.8)); // BMI = 24.69
    test('Test 7: Borderline Overweight', 'Overweight', bmi(81, 1.65)); // BMI = 29.76

    console.log(`\nTests passed: ${passed}`);
    console.log(`Tests failed: ${failed}`);
}

runTests();