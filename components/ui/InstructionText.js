import {Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';



const InstructionText = ({children}) => {
    return (
        <Text style={styles.instruction}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});

export default InstructionText;