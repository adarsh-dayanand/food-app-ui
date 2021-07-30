import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import categoriesData from '../../assets/constants/categoriesData';
import colors from '../../assets/constants/colors';

export default Popular = () => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                }]}>
                    <Feather
                        name="chevron-right"
                        size={14}
                        style={styles.categorySelectIcon}
                        color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>
                Categories
            </Text>
            <View style={styles.categoriesListWrapper}>
                <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        width: 120,
        padding: 15,
        marginLeft: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        elevation: 2,
    },
    categoryItemImage: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    categoryItemTitle: {
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 25,
        height: 25,
        borderRadius: 25,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
});