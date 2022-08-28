import { StyleSheet } from 'react-native';
import colors from '../../../../colors';

const styles = StyleSheet.create({
    container: (focused) => ({
        borderBottomColor: focused ? colors.icon : null,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 8,
        borderWidth: 0.4,
        marginBottom: -20,
        width: 200,
        heigth: 30
    }),
    input: {
        flex: 1,
        marginVertical: -20,
        fontSize: 18,
        color: colors.secondary
    },
    searchIcon: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        color: colors.text
    },
    Xbtn: {
        marginBottom: -6,
    },
    iconContainer: {
    }
});

export default styles;
