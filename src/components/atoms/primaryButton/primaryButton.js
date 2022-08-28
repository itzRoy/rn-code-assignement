import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native';
import colors from '../../../../colors';
import styles from './styles';

const PrimaryButton = ({ loading, onPressHandler, disabled }) => {
    return (
        <View style={styles.touchContainer}>
            <TouchableHighlight
                style={styles.buttonContainer(loading || disabled)}
                underlayColor={colors.primary300}
                onPress={onPressHandler}>
                <>
                    <Text style={styles.text}>Submit</Text>
                    {loading && <ActivityIndicator color={colors.secondary} />}
                </>
            </TouchableHighlight>
        </View>
    );
};

PrimaryButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    onPressHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

PrimaryButton.defaultProps = {
    disabled: false
};

export default PrimaryButton;
