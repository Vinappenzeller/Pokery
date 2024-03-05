

//set balance for everyone.  
const startPlayerBalance = 10
const startOpponentBalance = 10

let player
let opponent
let playerBet 
let opponentBets

opponentsBalance = []


function setupBalances(opponents)
{   
    let playerBalance = startPlayerBalance

    for(opponent in opponents)

        opponentsBalance.push(startOpponentBalance)

    return [opponentsBalance, playerBalance]
}

function takeBets(playerInput, opponentInputs, playerBalance, opponentBalances) {
    let pot = 0;

    // Iterate over opponent inputs
    for (let i = 0; i < opponentInputs.length; i++) {
        let input = opponentInputs[i];
        console.log("hello");

        if (input === "bigblind") {
            opponentBalances[i] -= 2;
            pot += 2;
        } else if (input === "lowblind") {
            opponentBalances[i] -= 1;
            pot += 1;
        } else if (input === "allin") {
            opponentBalances[i] -= 10;
            pot += 10;
        }
    }

    // Process player input
    if (playerInput === "bigblind") {
        playerBalance -= 2;
        pot += 2;
    } else if (playerInput === "lowblind") {
        playerBalance -= 1;
        pot += 1;
    } else if (playerInput === "allin") {
        playerBalance -= 10;
        pot += 10;
    }

    return [playerBalance, opponentBalances, pot];
}


function cashOut(playerBalance, opponentBalances, pot, playerWin, opponentWins) {
    
    if (playerWin) {
        playerBalance += pot;  // Use the compound assignment operator to add pot to playerBalance
        pot = 0;
    }

    for (let i = 0; i < opponentBalances.length; i++) {
        if (opponentWins[i]) {
            opponentBalances[i] += pot;  // Use the compound assignment operator to add pot to opponentBalance[i]
            pot = 0;
        }
    }

    return [playerBalance, opponentBalances, pot];
}


//testing purposes
let testOpponents = ["Tricia","Burr","Anomalisa"]

let testpot = 0

let testPlayerInput = "lowblind"
let testOpponentInput = ["lowblind", "allin", "bigblind"]

let [testOpponentBalance, testPlayerBalance] = setupBalances(testOpponents)
console.log("starting Balance")
console.log(testPlayerBalance)
console.log(testOpponentBalance)

let [testPlayerBalance2, testOpponentBalance2, testpot2] = takeBets(testPlayerInput, testOpponentInput, testPlayerBalance, testOpponentBalance)
console.log("betted balance")
console.log(testpot2)
console.log(testPlayerBalance2)
console.log(testOpponentBalance2)

let testPlayerwin = false
let testOpponentWin = [false, true, false]
let [testPlayerBalance3, testOpponentBalance3, testpot3] = cashOut(testPlayerBalance2, testOpponentBalance2, testpot2, testPlayerwin, testOpponentWin)
console.log("final result")
console.log(testpot3)
console.log(testPlayerBalance3)
console.log(testOpponentBalance3)