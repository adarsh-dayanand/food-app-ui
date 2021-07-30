import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../assets/constants/colors';
import Categories from '../widgets/Categories';
import Popular from '../widgets/Popular';
import Search from '../widgets/Search';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({navigation}) => {
    return (
        
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.header}>
                        <Image style={styles.profileImage} source={require('../../assets/images/profile.png')} />
                        <Feather name="menu" size={24} color={colors.textDark} />
                    </View>
                </SafeAreaView>
                {/* Title */}

                <View style={styles.title}>
                    <Text style={styles.mainTitle}>Food</Text>
                    <Text style={styles.subTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <Search />
                
                {/* Categories */}
                <Categories />

                {/* Popular */}
                <Popular />

            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    title: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    mainTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,
    },
    subTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
});