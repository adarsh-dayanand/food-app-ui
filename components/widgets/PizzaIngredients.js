import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import colors from '../../assets/constants/colors';

export default PizzaIngredients = ({item}) => {

    const renderIngredientsItem = ({ item }) => {
        return (
          <View
            style={[
              styles.ingredientItemWrapper,
              {
                marginLeft: item.id === '1' ? 20 : 0,
              },
            ]}>
            <Image source={item.image} style={styles.ingredientImage} />
          </View>
        );
      };

    return(
        <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
}

const styles = new StyleSheet.create({
    ingredientsWrapper: {
        marginTop: 40,
      },
      ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
      },
      ingredientsListWrapper: {
        paddingVertical: 20,
      },
      ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      },
      ingredientImage: {
        resizeMode: 'contain',
      },
  });