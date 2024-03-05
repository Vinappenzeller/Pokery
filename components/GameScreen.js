import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameScreen = ({ playerName, selectedCharacters = [] }) => {
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
          {/* Design your poker table here */}
          <Text style={styles.tableText}>Poker Table</Text>
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
    aspectRatio: 1, // Maintain aspect ratio
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
