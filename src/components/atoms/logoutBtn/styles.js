import { StyleSheet } from 'react-native';
import colors from '../../../../colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: colors.primary500,
        borderRadius: 8,
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
        color: colors.text
    }
});

export default styles;
