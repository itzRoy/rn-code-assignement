import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, TextInput, View } from 'react-native';
import colors from '../../../../colors';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const InputWitchIcon = ({
    type,
    hidePass,
    inputValue,
    handleInputChange,
    setPassState
}) => {
    const iconSize = useMemo(() => 30, []);
    const [focused, setFocused] = useState(false);
    const getIcon = useMemo(() => {
        if (type === 'username') {
            return <AntDesign name="user" size={iconSize} color={colors.icon} />;
        }
        if (type === 'password') {
            if (hidePass) {
                return <Entypo name="eye-with-line" size={iconSize} color={colors.icon} />;
            } else {
                return <Entypo name="eye" size={iconSize} color={colors.icon} />;
            }
        }
    }, [hidePass, iconSize, type]);

    const onFocusHandler = () => setFocused(true);
    const onBlurHandler = () => setFocused(false);

    return (
        <View style={styles.inputContainer(focused)}>
            <View style={styles.iconContainer}>
                <Pressable onPress={setPassState(type)}>{getIcon}</Pressable>
            </View>
            <TextInput
                style={styles.input}
                placeholder={type}
                placeholderTextColor={colors.primary300}
                onChangeText={handleInputChange()}
                value={inputValue}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                autoCapitalize="none"
                secureTextEntry={type === 'password' && hidePass}
            />
        </View>
    );
};

InputWitchIcon.prototypes = {
    type: PropTypes.string,
    hidePass: PropTypes.bool,
    inputValue: PropTypes.string,
    handleInputChange: PropTypes.func,
    setPassState: PropTypes.func
};

InputWitchIcon.defaultProps = {
    type: 'email',
    hidePass: false,
    inputValue: '',
    handleInputChange: () => {},
    setPassState: () => {}
};

export default InputWitchIcon;
