import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be between 1 and 99.', 
                [{ text: 'Okay', style:'default' , onPress: resetInputHandler }]);
            return;
        }

        onPickNumber(chosenNumber);
    }


    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number!</Title>
            <Card>
                <InstructionText>Enter a number:</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"  
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    value={enteredNumber} 
                    onChangeText={numberInputHandler}
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        
    );
}

const styles = StyleSheet.create({

    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numberInput: {
        height: 40,
        width: 100,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        marginBottom: 32,
    },

    buttonsContainer: {
        flexDirection: 'row',

    },

    buttonContainer: {
        flex: 1,
    }
    

});

export default StartGameScreen;

