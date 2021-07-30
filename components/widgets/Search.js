import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/constants/colors';

export default Search = () => {
    return (
        <View>
            <Feather style={styles.searchWrapper} name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginStart: 40,
        marginEnd: 20,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
        marginTop: -20,
    },
    searchText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginBottom: 5,
        color: colors.textLight,
    },
});