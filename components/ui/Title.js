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
        color: "white",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 8,
        padding: 12,
    },
});

export default Title;