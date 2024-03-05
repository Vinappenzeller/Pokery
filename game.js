const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let roundActive = true;
let opponentHands;
let playerHand;
let winner;

function getAllHands(player, opponents) {
    playerHand = player;
    opponentHands = opponents;
}

function evaluateHand(hand) {
    // ... (the existing evaluateHand function)
}

function determineWinner(playerHand, opponentHands) {
    const evaluatedPlayerHand = evaluateHand(playerHand);
    let bestOpponentHand = evaluateHand(opponentHands[0]);

    for (let i = 1; i < opponentHands.length; i++) {
        const evaluatedOpponentHand = evaluateHand(opponentHands[i]);

        if (evaluatedOpponentHand.handType === 'No Pair') {
            continue; // Skip opponents with no pair
        }

        if (evaluatedOpponentHand.handType === 'Straight Flush') {
            bestOpponentHand = evaluatedOpponentHand;
            break; // Straight Flush is the best hand, no need to check further
        }

        if (evaluatedOpponentHand.handType === 'Four of a Kind' && bestOpponentHand.handType !== 'Straight Flush') {
            bestOpponentHand = evaluatedOpponentHand;
        }
    }

    if (evaluatedPlayerHand.handType === 'No Pair') {
        winner = bestOpponentHand.cards;
    } else {
        if (bestOpponentHand.handType === 'No Pair') {
            winner = evaluatedPlayerHand.cards;
        } else {
            if (evaluatedPlayerHand.handType === 'Straight Flush') {
                winner = evaluatedPlayerHand.cards;
            } else if (evaluatedPlayerHand.handType === 'Four of a Kind' && bestOpponentHand.handType !== 'Straight Flush') {
                winner = evaluatedPlayerHand.cards;
            } else if (evaluatedPlayerHand.handType === bestOpponentHand.handType) {
                // Compare the highest card in case of a tie
                const playerHighestCard = ranks.indexOf(evaluatedPlayerHand.cards[4].rank);
                const opponentHighestCard = ranks.indexOf(bestOpponentHand.cards[4].rank);

                winner = playerHighestCard >= opponentHighestCard ? evaluatedPlayerHand.cards : bestOpponentHand.cards;
            } else {
                winner = bestOpponentHand.cards;
            }
        }
    }
}

function setCheck() {
    console.log('Player checks.');
}

function setFold() {
    console.log('Player folds.');
    roundActive = false;
}

function setRaise() {
    console.log('Player raises.');
}

// Example usage:
const hand1 = [
    { rank: '10', suit: 'hearts' },
    { rank: '9', suit: 'hearts' },
    { rank: '8', suit: 'hearts' },
    { rank: '7', suit: 'hearts' },
    { rank: '6', suit: 'hearts' }
];

getAllHands(hand1, [
    [
        { rank: '2', suit: 'spades' },
        { rank: '3', suit: 'hearts' },
        { rank: '4', suit: 'diamonds' },
        { rank: '5', suit: 'clubs' },
        { rank: '6', suit: 'spades' }
    ],
    // ... Add more opponent hands
]);

while (roundActive) {
    determineWinner(playerHand, opponentHands);
    // Add logic for the game round here
    // For example, based on the winner, you can call setCheck, setFold, setRaise functions.
}

console.log(`Winner's hand:`);
console.log(winner);
