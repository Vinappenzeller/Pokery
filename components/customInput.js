import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 100, 
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default CustomInput;