import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumbeHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumbeHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={['#4e0329','#ddb25f' ]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/background.png')} imageStyle={styles.backgroundImage} style={styles.rootScreen} resizeMode="cover">
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  }
});
