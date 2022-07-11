import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );

}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: olors.accent500,
        borderRadius: 8,
        padding: 12,
    },
});

export default Title;