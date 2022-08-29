import React from 'react';
import { View } from 'react-native';
import SearchInput from '../../atoms/searchInput/searchInput';
import styles from './styles';
import Btn from '../../atoms/btn/btn';

export const Header = ({searchValue, handleSearchChange, logoutHandler, onSearchBlur, clearSearch}) => {
    return (
        <View style={styles.header}>
            <SearchInput searchValue={searchValue} handleSearchChange={handleSearchChange} onSearchBlur={onSearchBlur} clearSearch={clearSearch} />
            <Btn text='Logout' pressHandler={logoutHandler} />
        </View>
    );
};

export default Header;
