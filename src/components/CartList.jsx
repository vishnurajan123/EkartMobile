import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import products from '../products';
import {ProductResponseContext} from '../contexts/ContextShare';
import FeatherIcons from 'react-native-vector-icons/Feather';

export default function CartList() {
  const {cart, setCart} = useContext(ProductResponseContext);
  const [cartList, setCartList] = useState([]);
  const addToCart = item => {
    setCart([...cart, item]);
  };
  const removeFromCart = id => {
    const indexToRemove = cart.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
      const updatedCart = [
        ...cart.slice(0, indexToRemove),
        ...cart.slice(indexToRemove + 1),
      ];
      setCart(updatedCart);
    }
  };
  useEffect(() => {
    setCartList(
      products.filter(item => cart.map(item => item.id).includes(item.id)),
    );
  }, [cart]);
  return (
    <FlatList
      data={cartList}
      renderItem={({item}) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontSize: 13, fontWeight: '500'}}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 150,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 100,
                }}>
                <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                  ₹{Math.trunc(item.price - (item.price * item.discount) / 100)}
                  /kg
                </Text>
                <Text
                  style={{
                    color: '#B8B8B8',
                    textDecorationLine: 'line-through',
                    fontWeight: '500',
                  }}>
                  ₹{item.price}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F9C941',
                  paddingHorizontal: 5,
                  borderRadius: 6,
                }}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  {item.discount}%
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#F5F5F5',
                padding: 4,
                justifyContent: 'space-between',
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 5,
                width: 120,
              }}>
              <TouchableOpacity
                style={{
                  width: 27,
                  height: 27,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}
                onPress={() => removeFromCart(item.id)}>
                <FeatherIcons
                  style={{color: '#08C25D', fontSize: 19, fontWeight: '900'}}
                  name="minus"
                />
              </TouchableOpacity>
              <Text style={{color: '#959595', fontWeight: '800', fontSize: 14}}>
                {cart.filter(cartItem => cartItem.id == item.id).length}
              </Text>

              <TouchableOpacity
                style={{
                  width: 27,
                  height: 27,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}
                onPress={() => addToCart(item)}>
                <FeatherIcons
                  style={{color: '#08C25D', fontSize: 19, fontWeight: '900'}}
                  name="plus"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: '500',
                textAlign: 'right',
                marginTop: 5,
              }}>
              ₹
              {Math.trunc(item.price - (item.price * item.discount) / 100) *
                cart.filter(cartItem => cartItem.id == item.id).length}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({});
