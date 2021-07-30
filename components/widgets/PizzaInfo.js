import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../assets/constants/colors';

export default PizzaInfo = ({item}) => {
    return(
        <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
    );
}

const styles = new StyleSheet.create({
    infoWrapper: {
      marginTop: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoLeftWrapper: {
      paddingLeft: 20,
    },
    infoItemWrapper: {
      marginBottom: 20,
    },
    infoItemTitle: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      color: colors.textLight,
    },
    infoItemText: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 18,
      color: colors.textDark,
    },
    itemImage: {
      resizeMode: 'contain',
      marginLeft: 50,
    },
  });