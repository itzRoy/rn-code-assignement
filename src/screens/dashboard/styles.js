import { StyleSheet } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 10
    },
    noArticles: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.secondary,
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1
    }

});
export default styles;
