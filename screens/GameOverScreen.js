import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {

    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image}></Image>
            </View>

            <Text style={styles.summaryText}>
                Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>

            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;


const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer:{
        overflow: 'hidden',
        borderRadius: deviceWidth < 380 ? 75 : 300,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary600,
        margin: 32,
    },

    image:{
        width: '100%',
        height: '100%',
    },

    summaryText: {
        fontFamily: 'open-sans-regular',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});

export default GameOverScreen; 