//===== DESCRIPTION:
// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

// ====== My solution
function alexMistakes(numberOfKata, timeLimit) {
    let mistakeTime = 5;
    let freeTime = timeLimit - (numberOfKata * 6);
    let count = 0;

    while (mistakeTime < freeTime) {
        count++;
        freeTime = freeTime - mistakeTime;
        mistakeTime *= 2;
    }
    return count;

}


// ====== Tests
console.log(alexMistakes(6, 60)); //2
console.log(alexMistakes(10, 120)); //3
console.log(alexMistakes(11, 120)); // 2
console.log(alexMistakes(8, 120)); // 3
