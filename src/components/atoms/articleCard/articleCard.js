import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const ArticleCard = ({date, text, source}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.source}>{source}</Text>
            <View style={styles.seperator} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.seperator} />
            <Text style={styles.date}>{date}</Text>
        </View>
    );
};

ArticleCard.propTypes = {
    date: PropTypes.string,
    source: PropTypes.string,
    text: PropTypes.string
};

ArticleCard.defaultProps = {
    date: null,
    source: null,
    text: null
};
export default ArticleCard;
