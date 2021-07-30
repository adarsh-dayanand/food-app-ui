import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import categoriesData from '../../assets/constants/categoriesData';
import colors from '../../assets/constants/colors';
import popularData from '../../assets/constants/popularData';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = () => {

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
    const renderPopularItem = ({ item }) => {
        return (
            <View style={styles.categoryItemWrapper}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={styles.categorySelectWrapper}>
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

                <View>
                    <Feather style={styles.searchWrapper} name="search" size={16} color={colors.textDark} />
                    <View style={styles.search}>
                        <Text>Search</Text>
                    </View>
                </View>

                {/* Categories */}
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

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.categoriesTitle}>
                        Popular
                    </Text>
                    {
                        popularData.map((item) => (
                            <View style={[styles.popularCardWrapper, {
                                marginTop: item.id == 1 ? 10 : 20,
                            }]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                            <Text style={styles.popularTopText}>Top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitleWrapper}>
                                            <Text style={styles.popularTilesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTilesWeight}>Weight {item.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name="plus" size={10} color={colors.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name="star" size={10} color={colors.textDark} />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image style={styles.popularCardImage} source={item.image} />
                                </View>
                            </View>
                        )
                        )
                    }
                </View>
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
    },
    searchText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginBottom: 5,
        color: colors.textLight,
    },

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

    // Popular
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitleWrapper: {
        marginTop: 20,
    },
    popularTilesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    popularTilesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
});