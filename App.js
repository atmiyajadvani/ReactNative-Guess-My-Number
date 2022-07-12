import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumbeHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumbeHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }



  return (
    <LinearGradient colors={["#72063c", "#ddb52f" ]} style={styles.rootScreen}>
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
