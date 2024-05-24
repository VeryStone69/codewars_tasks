// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000.
//
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to
// see which numbers are counted in each case.

function getDivisorsCnt(n){
    let count = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                count++;
            } else {
                count += 2;
            }
        }
    }

    return count;
}

function runTests() {
    function assertEqual(actual, expected, description) {
        if (actual === expected) {
            console.log(`✔️ ${description}`);
        } else {
            console.error(`❌ ${description}: expected ${expected}, but got ${actual}`);
        }
    }

    assertEqual(getDivisorsCnt(1), 1, 'Test 1: should return 1 for input 1');
    assertEqual(getDivisorsCnt(2), 2, 'Test 2: should return 2 for input 2');
    assertEqual(getDivisorsCnt(3), 2, 'Test 3: should return 2 for input 3');
    assertEqual(getDivisorsCnt(4), 3, 'Test 4: should return 3 for input 4');
    assertEqual(getDivisorsCnt(6), 4, 'Test 5: should return 4 for input 6');
    assertEqual(getDivisorsCnt(12), 6, 'Test 6: should return 6 for input 12');
    assertEqual(getDivisorsCnt(36), 9, 'Test 7: should return 9 for input 36');
    assertEqual(getDivisorsCnt(13), 2, 'Test 8: should return 2 for input 13 (prime)');
    assertEqual(getDivisorsCnt(100), 9, 'Test 9: should return 9 for input 100');
    assertEqual(getDivisorsCnt(101), 2, 'Test 10: should return 2 for input 101 (prime)');
}

// Запуск тестов
runTests();

