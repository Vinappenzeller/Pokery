import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const GameScreen = ({ playerName, selectedCharacters = [] }) => {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    
    fetchGameState();
  }, []);

  const fetchGameState = async () => {
    try {
 
      const response = await axios.get();
      setGameState(response.data);
    } catch (error) {
      console.error('Error fetching game state:', error);
    }
  };

  if (!gameState) {
    
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Text style={styles.title}>Texas Hold'em Poker</Text>
      </View>
      <View style={styles.gameContainer}>
        {/* Dealer */}
        <View style={styles.dealerContainer}>
          <Text style={styles.dealerText}>Dealer</Text>
        </View>
        {/* Characters */}
        <View style={styles.characterContainer}>
          {selectedCharacters.map((character, index) => (
            <Text key={index} style={styles.characterText}>{character}</Text>
          ))}
        </View>
        {/* Player Name */}
        <Text style={styles.playerName}>{playerName}</Text>
        {/* Poker Table */}
        <View style={styles.table}>
          {/* Display game state on the table */}
          <Text style={styles.tableText}>Game State: {gameState}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97704f',
  },
  topBarContainer: {
    backgroundColor: '#4d0000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealerContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  dealerText: {
    color: '#fff',
    fontSize: 16,
  },
  characterContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  characterText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  playerName: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fff',
    fontSize: 16,
  },
  table: {
    backgroundColor: '#0f4f0f',
    width: '80%',
    aspectRatio: 1, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default GameScreen;
