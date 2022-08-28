import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import {
    fetchArticles,
    searchArticles,
    fetchInitialArticles,
    clearState
} from '../../store/actions/articleActions';
import Header from '../../components/molecules/header/header';
import ArticleCard from '../../components/atoms/articleCard/articleCard';
import colors from '../../../colors';

const Dashboard = ({ navigation }) => {
    const getArticles = useSelector((state) => state.articles);
    const {
        loading,
        error,
        done,
        pageNumber,
        articles = [],
    } = getArticles;
    const { accessToken } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (value) => setSearchValue(value);
    const logoutHandler = () => dispatch(logout());

    useEffect(() => {
        if (!accessToken) {
            dispatch(clearState());
            navigation.navigate('login');
        }
    }, [accessToken]);

    useEffect(() => {
        dispatch(fetchInitialArticles());
    }, []);

    useEffect(()=>{
        searchValue.length > 0 && dispatch(searchArticles(searchValue));
  
    }, [searchValue]);
  
  

    const fetchMoreArticles = () => {
        if (!searchValue && !done && !error) {
            dispatch(fetchArticles(pageNumber));      
        }
    };
    const onSearchBlur = () => {
        if(!searchValue) {
            dispatch(clearState());
            dispatch(fetchInitialArticles());
        }
    };
    const clearSearch = () => {
        setSearchValue('');
        dispatch(clearState());
    };
    console.log(articles);
    const pubDate = (date) => date.split('T')[0];
    return (
        <View style={styles.wraper}>
            {!articles ? <ActivityIndicator color={colors.primary} /> : <FlatList 
                data={articles} 
                ListHeaderComponent={<Header onSearchBlur={onSearchBlur} clearSearch={clearSearch} searchValue={searchValue} handleSearchChange={handleSearchChange} logoutHandler={logoutHandler} />} 
                renderItem={({item}) => <ArticleCard date={pubDate(item.pub_date)} text={item.lead_paragraph} source={item.source} /> } 
                onEndReached={fetchMoreArticles}
                keyExtractor={item => item._id}
            />}

            {articles && loading && <ActivityIndicator color={colors.secondary} />}
        </View>
    );
};

Dashboard.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Dashboard;
