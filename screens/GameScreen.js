import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Title from '../components/ui/Title';

const GameScreen = ({userNumber}) => {

    const initalGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initalGuess);

    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
    
        if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
        } else {
        return rndNum;
        }
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Screen</Title>
            <Text></Text>
            <View>
                <Text>Higher or Lower</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});

export default GameScreen;