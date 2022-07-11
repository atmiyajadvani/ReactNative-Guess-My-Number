import { Text, View, StyleSheet, Pressable } from 'react-native';

const PrimaryButton = ({children, onPress}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    buttonOuterContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    pressed:{
        opacity: 0.75,
    }
});

export default PrimaryButton;

