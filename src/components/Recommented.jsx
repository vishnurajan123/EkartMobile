import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import products from '../products';
import {ProductResponseContext} from '../contexts/ContextShare';

export default function Recommented() {
  const {cart, setCart} = useContext(ProductResponseContext);
  const [recomented, setRecomented] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };
  const reversedData = [...recomented].reverse();
 useEffect(()=>{
setRecomented(    products.filter(item => !cart.map(item => item.id).includes(item.id)))
 },[cart])
  return (
    <View style={{marginTop: 30}}>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Recommended
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reversedData}
        style={{marginTop: 20}}
        renderItem={({item}) => (
          <View style={{marginRight: 25, width: 85, alignItems: 'center'}}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 70,
                height: 55,
                borderRadius: 10,
                objectFit: 'contain',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item.name}
            </Text>
            <Text style={{color: 'black', fontWeight: '600', marginTop: 3}}>
              ₹{Math.trunc(item.price - (item.price * item.discount) / 100)}
            </Text>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#08C25D',
                width: 52,
                paddingVertical: 2,
                borderRadius: 5,
                marginTop: 3,
              }}>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 12}}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
