import { Text, View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';



function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {

    const initalGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initalGuess);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver]);


    function nextGuessHandler(direction) {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You kow that this is wrong!..', [
                { text: 'Sorry', style: 'cancel'}
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);

    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Screen</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} style={styles.buttonContainer}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} style={styles.buttonContainer}>+</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    }
});

export default GameScreen;