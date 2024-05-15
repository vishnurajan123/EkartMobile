import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import products from '../products';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {
  FilterProductContext,
  ProductResponseContext,
} from '../contexts/ContextShare';

export default function ProductList() {
  const {cart, setCart} = useContext(ProductResponseContext);
  const {filter, setFilter} = useContext(FilterProductContext);
  const [nowSelected, setNowSelected] = useState(1);

  const [items, setItems] = useState(products);
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
    if (filter == 'all') {
      setItems(products);
    } else if (filter !== '') {
      setItems(products.filter(item => item.category == filter));
    }
  }, [filter]);

  const handleSelect = selectedId => {
    setNowSelected(selectedId);
  };

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View
          style={
            nowSelected == item.id
              ? {borderWidth: 2, borderColor: '#08C25D', borderRadius: 20}
              : {padding: 2}
          }>
          <TouchableWithoutFeedback onPress={() => handleSelect(item.id)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <View style={{padding: 10}}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: 111,
                    height: 78,
                    objectFit: 'contain',
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: 165,
                  justifyContent: 'space-evenly',
                  height: 86,
                  paddingRight: 10,
                }}>
                <Text style={{color: 'black', fontSize: 13, fontWeight: '500'}}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: 100,
                    }}>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      ₹
                      {Math.trunc(
                        item.price - (item.price * item.discount) / 100,
                      )}
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
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#F5F5F5',
                    padding: 4,
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    alignItems: 'center',
                    marginTop: 5,
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
                      style={{
                        color: '#08C25D',
                        fontSize: 19,
                        fontWeight: '900',
                      }}
                      name="minus"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{color: '#959595', fontWeight: '800', fontSize: 14}}>
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
                      style={{
                        color: '#08C25D',
                        fontSize: 19,
                        fontWeight: '900',
                      }}
                      name="plus"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
      style={{marginTop: 20, marginBottom: 30}}
    />
  );
}

const styles = StyleSheet.create({});
