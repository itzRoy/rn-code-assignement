import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import colors from '../../../../colors';

const LogoutBtn = ({logoutHandler}) => {
    return (
        <TouchableHighlight style={styles.container} onPress={logoutHandler} underlayColor={colors.secondary}>
            <View >
                <Text style={styles.text}>
                Logout
                </Text>
            </View>
        </TouchableHighlight>
    );
};

LogoutBtn.propTypes = {};

export default LogoutBtn;
