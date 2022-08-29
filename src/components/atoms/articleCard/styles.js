import { StyleSheet } from 'react-native';
import colors from '../../../../colors';

const styles = StyleSheet.create({
    container: {
        // height: 200,
        backgroundColor: colors.primary300,
        borderRadius: 16,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 8,
        marginVertical: 16,
        borderColor: colors.icon,
        borderWidth: 4,
        flex: 1
    },
    seperator: {
        width: '100%',
        height: 2,
        marginVertical: 10,
        backgroundColor: colors.secondary,
    },
    source: {
        fontSize: 18,
        color: colors.text
    },
    text: {
        color: colors.text,
    },
    date: {
        alignSelf: 'flex-end',
        color: colors.text,
        fontSize: 8,
    }
});

export default styles;
