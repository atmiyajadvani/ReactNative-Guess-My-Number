import { Text } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.title}>Opponent's Guess</Text>
    );

}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        borderRadius: 8,
        padding: 12,
    },
});

export default Title;