import { StyleSheet } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        color: colors.text,
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    msgText: {
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        color: colors.secondary
    }
});
export default styles;
