import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {ProductResponseContext} from '../contexts/ContextShare';

export default function Checkout({navigation}) {
  const {cart, setCart} = useContext(ProductResponseContext);
  const handleCheckout = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.triangle}></View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#08C25D',
          height: 84,
          borderRadius: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
            {cart.length - 1} Items
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
            ₹
            {Math.trunc(
              cart
                .slice(1)
                .map(item => item.price - (item.price * item.discount) / 100)
                .reduce((item1, item2) => item1 + item2, 0),
            )}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: 170,
            backgroundColor: 'white',
            height: 45,
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={handleCheckout}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Checkout
          </Text>
          <FeatherIcons
            style={{color: '#08C25D', fontSize: 18, fontWeight: '500'}}
            name="shopping-cart"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 11,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#08C25D',
    marginBottom: -2,
  },
});
