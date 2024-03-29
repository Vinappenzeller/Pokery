import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import axios from 'axios';

import CharacterSelectionScreen from "./components/CharacterSelectionScreen";
import RoundSettingsScreen from "./components/RoundSettingsScreen";
import GameScreen from "./components/GameScreen";

const Stack = createStackNavigator();

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [showCharacterSelection, setShowCharacterSelection] = useState(false);
  const [showRoundSettings, setShowRoundSettings] = useState(false);

  const handleButtonPress = async () => {
    if (playerName !== "" && selectedCharacters.length > 0) {
      try {
       
        const response = await axios.post( {
          playerName,
          selectedCharacters
        });
        setShowRoundSettings(true);
      } catch (error) {
        console.error('Error starting game:', error);
        Alert.alert('Error', 'Failed to start game. Please try again later.');
      }
    } else {
      alert("Please enter your name and choose at least one character.");
    }
  };

  const handleSelectCharacter = (characters) => {
    setSelectedCharacters(characters);
    setShowCharacterSelection(false);
  };

  const handleCloseRoundSettings = () => {
    setShowRoundSettings(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4d0000", 
          },
          headerTintColor: "#fff", 
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function HomeScreen({ navigation }) {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#97704f",
      },
      Text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
      },
      topBarContainer: {
        backgroundColor: "#4d0000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
      },
      bottomBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopWidth: 0,
        borderTopColor: "#4d0000",
        backgroundColor: "#4D0000",
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        maxWidth: "60%", 
        marginRight: 10,
        backgroundColor: '#d2a679', 
      },
      button: {
        backgroundColor: '#4D0000', 
        color: '#d2a679', 
      }
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <Text style={styles.Text}>Pokery</Text>
        </View>
        <View style={styles.bottomBarContainer}>
          <TextInput
            style={styles.input}
            placeholder="Who are you?"
            onChangeText={setPlayerName}
            value={playerName}
          />
        </View>
        <View style={styles.bottomBarContainer}>
          <Button
            onPress={handleButtonPress}
            title="Play"
            disabled={playerName === "" || selectedCharacters.length === 0}
            style={styles.button}
          />
          <Button
            onPress={() => setShowCharacterSelection(true)}
            title="Select Characters"
            style={styles.button}
          />
        </View>
  
        {showCharacterSelection && (
          <CharacterSelectionScreen
            onSelectCharacter={handleSelectCharacter}
            onClose={() => setShowCharacterSelection(false)}
          />
        )}
  
        {showRoundSettings && (
          <RoundSettingsScreen
            onClose={handleCloseRoundSettings}
            onPlay={() => navigation.navigate("Game")}
          />
        )}
      </View>
    );
  }
}
