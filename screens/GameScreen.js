import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

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


const GameScreen = ({userNumber}) => {

    const initalGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initalGuess);

    let minBoundary = 1;
    let maxBoundary = 100;

    function nextGuessHandler(direction) {
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);

    }

    function prevGuessHandler() {
        setCurrentGuess(initalGuess);
    }



    return (
        <View style={styles.screen}>
            <Title>Opponent's Screen</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} style={styles.buttonContainer}>+</PrimaryButton>
                    <PrimaryButton onPress={prevGuessHandler} style={styles.buttonContainer}>-</PrimaryButton>
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