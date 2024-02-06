//
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero() {
    return ![...arguments][0] ? 0 : result([0, ...arguments])
}

function one() {
    return ![...arguments][0] ? 1 : result([1, ...arguments])
}

function two() {
    return ![...arguments][0] ? 2 : result([2, ...arguments])
}

function three() {
    return ![...arguments][0] ? 3 : result([3, ...arguments])
}

function four() {
    return ![...arguments][0] ? 4 : result([4, ...arguments])
}

function five() {
    return ![...arguments][0] ? 5 : result([5, ...arguments])


}

function six() {
    return ![...arguments][0] ? 6 : result([6, ...arguments])
}

function seven() {
    return ![...arguments][0] ? 7 : result([7, ...arguments])
}

function eight() {
    return ![...arguments][0] ? 8 : result([8, ...arguments])
}

function nine() {
    return ![...arguments][0] ? 9 : result([9, ...arguments])
}


function plus() {
    return ["plus", [...arguments][0]]
}

function minus() {
    return ["minus", [...arguments][0]]
}

function times() {
    return ["times", [...arguments][0]]
}

function dividedBy() {
    return ["dividedBy", [...arguments][0]]
}

function result() {
    const array = [...arguments]
    switch (array[0][1][0]) {
        case "times":
            return Math.floor(array[0][0] * array[0][1][1]);
        case "plus":
            return Math.floor(array[0][0] + array[0][1][1]);
        case "minus":
            return Math.floor(array[0][0] - array[0][1][1]);
        case "dividedBy":
            return Math.floor(array[0][0] / array[0][1][1]);
        default:
            break;
    }
}

console.log(seven(times(five())));
console.log(four(plus(nine())));