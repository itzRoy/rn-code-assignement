import {StyleSheet} from 'react-native';
import colors from '../../../../colors';

const styles = StyleSheet.create({
  inputContainer: isFocused => ({
    borderColor: isFocused ? colors.secondary : colors.primary300,
    borderWidth: 3,
    borderRadius: 50,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: colors.primary500,
  }),
  borderPurp: {
    borderColor: colors.primary,
  },
  borderDark: {
    borderColor: colors.primary300,
  },
  input: {
    color: colors.secondary,
    fontSize: 16,
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
  },
});

export default styles;
