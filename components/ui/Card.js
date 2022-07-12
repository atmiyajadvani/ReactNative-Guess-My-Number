import {View, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';


const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        shadowOpacity: 0.8,
    },
});

export default Card;