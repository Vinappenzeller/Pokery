const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let roundActive = true;
let opponentHands;
let playerHand;
let winner;

app.use(bodyParser.json());

app.post('/start-game', (req, res) => {
    const { playerName, selectedCharacters } = req.body;

    // Process the request and send back a response
    // For now, let's just log the received data
    console.log('Received data from frontend:');
    console.log('Player Name:', playerName);
    console.log('Selected Characters:', selectedCharacters);

    res.send('Game started successfully.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
