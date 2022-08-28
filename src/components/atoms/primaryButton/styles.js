import { StyleSheet } from 'react-native';
import colors from '../../../../colors';

const styles = StyleSheet.create({
  touchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary
  },
  buttonContainer: disabled => ({
    backgroundColor: disabled ? colors.primary300 : colors.secondary,
    borderRadius: 50,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
    flex: 1
  }),
  text: {
    fontSize: 24,
    marginHorizontal: 20,
    color: colors.text
  }
});

export default styles;
