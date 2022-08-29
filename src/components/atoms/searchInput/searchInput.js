import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../../colors';

import styles from './styles';

const SearchInput = ({ searchValue, handleSearchChange, onSearchBlur, clearSearch }) => {
    const [focused, setFocused] = useState(false);

    const setFocuseTrue = () => setFocused(true);
    const SetFocusFalse = () => {
        setFocused(false);
        onSearchBlur();
    };

    return (

        <View style={styles.container(focused)}>

            {!searchValue && !focused ? <Pressable onPress={setFocuseTrue} style={styles.searchIcon}>
                <AntDesign name='search1' size={25} color={colors.icon} />
                {searchValue && <Text style={styles.text}>{searchValue}</Text>}
            </Pressable>: (<Pressable onPress={clearSearch} style={styles.Xbtn} >
                <AntDesign name='close' size={20} color={colors.icon} />
            </Pressable>)}

            {focused && <TextInput style={styles.input} onBlur={SetFocusFalse} onFocus={setFocuseTrue} onChangeText={handleSearchChange} value={searchValue} autoFocus  />}

            {}

        </View>
    );
};

export default SearchInput;
