import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const RoundSettingsScreen = ({ onPlay }) => {
  const [smallBlind, setSmallBlind] = useState(5);
  const [bigBlind, setBigBlind] = useState(10);
  const [roundTime, setRoundTime] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Round Settings</Text>
      <View style={styles.settingItem}>
        <Text>Small Blind:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(smallBlind)}
          onChangeText={(text) => setSmallBlind(text)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Big Blind:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(bigBlind)}
          onChangeText={(text) => setBigBlind(text)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Round Time (minutes):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(roundTime)}
          onChangeText={(text) => setRoundTime(text)}
        />
      </View>
      <TouchableOpacity onPress={onPlay} style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '40%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  playButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4d0000',
    borderRadius: 5,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RoundSettingsScreen;
