import { TextInput, Pressable, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {
    return (
        <View>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}


export default StartGameScreen;

