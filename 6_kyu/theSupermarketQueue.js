// There is a queue for the self-checkout tills at the supermarket. Your task is write a function
// to calculate the total time required for all the customers to check out!
//
//     input:
//    customers: an array of positive integers representing the queue. Each integer represents a customer,
//     and its value is the amount of time they require to check out.
//    n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.


function queueTime(customers, n) {
    if (n <= 0 || customers.length === 0) {
        return 0;
    } else if (n === 1) {
        return customers.reduce((a, b) => a + b, 0);
    } else {
        let tills = Array(n).fill(0);
        for (let time of customers) {
            let idx = tills.indexOf(Math.min(...tills));
            tills[idx] += time;
        }

        return Math.max(...tills);
    }
}

function testQueueTime() {
    const testCases = [
        { customers: [5, 3, 4], n: 1, expected: 12 },
        { customers: [10, 2, 3, 3], n: 2, expected: 10 },
        { customers: [2, 3, 10], n: 2, expected: 12 },
        { customers: [], n: 2, expected: 0 }, // Пустая очередь
        { customers: [1, 2, 3, 4, 5], n: 100, expected: 5 } // Больше касс, чем клиентов
    ];

    testCases.forEach(({ customers, n, expected }, index) => {
        const result = queueTime(customers, n);
        console.log(`Test ${index + 1}:`, result === expected ? 'Passed' : 'Failed', `- Expected: ${expected}, Result: ${result}`);
    });
}


testQueueTime();




