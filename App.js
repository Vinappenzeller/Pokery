import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";
import PlayButtonComponent from "./components/playbutton";
import ButtonComponent from "./components/button";
import CustomInput from "./components/customInput";
import CharacterSelectionScreen from "./components/CharacterSelectionScreen";
import RoundSettingsScreen from "./components/RoundSettingsScreen";
import GameScreen from "./components/GameScreen";

const Stack = createStackNavigator();

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [showCharacterSelection, setShowCharacterSelection] = useState(false);
  const [showRoundSettings, setShowRoundSettings] = useState(false);

  const handleButtonPress = () => {
    if (playerName !== "" && selectedCharacters.length > 0) {
      setShowRoundSettings(true);
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
            backgroundColor: "#4d0000", // Brown color
          },
          headerTintColor: "#fff", // White text color
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
    return (
      <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <Text style={styles.Text}>Pokery</Text>
        </View>
        <View style={styles.bottomBarContainer}>
          <CustomInput
            placeholder="Who are you?"
            onChangeText={setPlayerName} // Updated to directly set playerName
            value={playerName}
          />
        </View>
        <View style={styles.bottomBarContainer}>
          <PlayButtonComponent
            onPress={handleButtonPress}
            title="Play"
            style={{ marginRight: 10 }}
            disabled={playerName === "" || selectedCharacters.length === 0}
          />
          <ButtonComponent
            onPress={() => setShowCharacterSelection(true)}
            title="Select Characters"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Make the container a column
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
    paddingVertical: 10, // Adjust the padding as needed
  },
  bottomBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5, // Adjust the padding as needed
    borderTopWidth: 0, // Add a border at the top of the bottomBarContainer
    borderTopColor: "#4d0000", // Set the border color to match topBarContainer
  },
});
