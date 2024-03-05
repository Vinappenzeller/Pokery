import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const characters = [
  "Character 1",
  "Character 2",
  "Character 3",
  "Character 4",
  "Character 5"
];

const CharacterSelectionScreen = ({ onSelectCharacter, onClose }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const toggleCharacterSelection = (character) => {
    const isSelected = selectedCharacters.includes(character);
    if (isSelected) {
      setSelectedCharacters(selectedCharacters.filter((c) => c !== character));
    } else {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Character</Text>
      {characters.map((character, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleCharacterSelection(character)}
          style={[
            styles.characterButton,
            selectedCharacters.includes(character) && styles.selectedCharacterButton,
          ]}
        >
          <Text style={styles.characterButtonText}>{character}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => { onSelectCharacter(selectedCharacters); onClose(); }} style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select Characters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97704f',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  characterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selectedCharacterButton: {
    backgroundColor: '#4d0000',
  },
  characterButtonText: {
    color: '#000',
  },
  selectButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4d0000',
    borderRadius: 5,
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CharacterSelectionScreen;
