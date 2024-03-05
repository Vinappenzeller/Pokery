import pkg from  "./dealer.js";
const { createDeck, shuffleDeck, dealPlayerHand, dealBotHands, addCommunityCard} = pkg


// Testing purposes
let testdeck = []
let testOpponents = ["Monika", "Sarah", "Jeff"]
let drawAmount
i = 0

let gameOn = true
function gameStart()
{

    drawAmount = 2
    testdeck = createDeck();
    testdeck = shuffleDeck(testdeck);
    return [testdeck, drawAmount]
}


while(gameOn)
{
    let [testdeck, draw] = gameStart
    testdeck = createDeck();
    testdeck = shuffleDeck(testdeck);
    let [testhand, testdeck2] = dealPlayerHand(testdeck);
    let [opponentHands, testdeck3] = dealBotHands(testdeck2)
    let [communityCard, testdeck4] = addCommunityCard(testdeck3)

    console.log(`your cards are ${testhand[0]} and ${testhand[1]}`)
    console.log(`the table cars are ${communityCard[0]}, ${communityCard[1]} and ${communityCard[2]}`)


    decision = true
    while (decision)
    {
        if(playerActive = false){
            decision = false
        }

        let input = prompt("Press 1 to check, 2 to fold and 3 to bet")

        if (input = 1){
            decision = false
        }
        else if (input = 2){
            decision = false
        }
        else if (input = 3){
            decision = false
        }
        else{
            console.log("input invalid")
        }
    }
    

}


