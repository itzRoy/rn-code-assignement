import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import colors from '../../../../colors';

const Btn = ({pressHandler, text}) => {
    return (
        <TouchableHighlight style={styles.container} onPress={pressHandler} underlayColor={colors.secondary}>
            <View >
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

Btn.propTypes = {};

export default Btn;
