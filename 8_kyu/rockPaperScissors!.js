// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';

    const rules = {
        scissors: 'paper',
        paper: 'rock',
        rock: 'scissors'
    };

    return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
};

console.log('paper','scissors')