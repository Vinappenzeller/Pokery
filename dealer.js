
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

//create deck
function createDeck(){
    let deck = [];

    for (let suit of suits){
        for (let rank of ranks){
            deck.push({suit, rank})
        }
    }

    return deck
}

//shuffle deck
function shuffleDeck(deck) {

    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

//give player hands
function dealPlayerHand(deck){
    let i = deck.length;
    let hand = [];

    for(let j = 0; j < drawAmount; j++){
        let num = Math.floor(Math.random() * deck.length)
        hand.push(deck[num])
        deck.splice(num, 1)
    }
    
    return [hand, deck]
}

//give bot hands
function dealBotHands(opponents, deck, drawAmount){
    let opponentHands = []

    for (opponent in opponents)
    {    
        let hand = []
        for(let j = 0; j < drawAmount; j++){

            
            let num = Math.floor(Math.random() * deck.length)
            hand.push(deck[num])
            deck.splice(num, 1)
        }    
        opponentHands.push(hand)       
    }

    return [opponentHands, deck]
}

//draw those cards in the middle
function addCommunityCard(deck){
    let communityHand = []

    for(let j = 0; j < 5; j++){
        let num = Math.floor(Math.random() * deck.length)
        communityHand.push(deck[num])
        deck.splice(num, 1)
    }

    return [communityHand, deck]
}

// Testing purposes
let testdeck = []
let testOpponents = ["Monika", "Sarah", "Jeff"]
let drawAmount = 2

testdeck = createDeck();
console.log(testdeck[0]);
console.log(testdeck[5]);
console.log(testdeck[3]);

testdeck = shuffleDeck(testdeck);
console.log(testdeck[0]);
console.log(testdeck[5]);
console.log(testdeck[3]);
console.log(testdeck.length)

let [testhand, testdeck2] = dealPlayerHand(testdeck);
console.log(testdeck.length)
console.log(testhand)

let [opponentHands, testdeck3] = dealBotHands(testOpponents ,testdeck2, drawAmount);
console.log("opponent hands")
console.log(testdeck3.length)
console.log(opponentHands)

let [communityCard, testdeck4] = addCommunityCard(testdeck3)
console.log("community hands")
console.log(testdeck4.length)
console.log(communityCard)
