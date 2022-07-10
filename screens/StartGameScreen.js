import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"  autoCapitalize='none' />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
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
        backgroundColor: '#4e0329',
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
        borderBottomColor: '#ddb25f',
        borderBottomWidth: 2,
        color: '#ddb25f',
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

