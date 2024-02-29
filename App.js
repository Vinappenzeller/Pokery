import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlayButtonComponent from './components/playbutton';
import ButtonComponent from './components/button';
import CustomInput from './components/customInput';

export default function App() {

  const handleButtonPress = () => {
    // Add your button press logic here
    console.log('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Text style={styles.Text}>Website</Text>
      </View> 
      <View style={styles.bottomBarContainer}>
        <CustomInput placeholder={"Who are you?"}></CustomInput>
      </View>    
      <View style={styles.bottomBarContainer}>
        <PlayButtonComponent onPress={handleButtonPress} title="Play" style={{ marginRight: 10 }} />
        <ButtonComponent onPress={handleButtonPress} title="Select Characters" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Make the container a column
    backgroundColor: '#97704f',
  },
  Text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  topBarContainer: {
    backgroundColor: '#4d0000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, // Adjust the padding as needed
  },
  bottomBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5, // Adjust the padding as needed
    borderTopWidth: 0, // Add a border at the top of the bottomBarContainer
    borderTopColor: '#4d0000', // Set the border color to match topBarContainer
  },
});
// 



