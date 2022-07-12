import { TextInput, Pressable, View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';

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
        <View style={styles.inputContainer}>
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
        </View>
    );
}

const styles = StyleSheet.create({

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        shadowOpacity: 0.8,
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
    },

    buttonsContainer: {
        flexDirection: 'row',

    },

    buttonContainer: {
        flex: 1,
    }

});

export default StartGameScreen;

