import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {ProductResponseContext} from '../contexts/ContextShare';
import {Checkbox} from 'react-native-paper';

export default function Bill({navigation}) {
  const {cart, setCart} = useContext(ProductResponseContext);
  const [checked, setChecked] = React.useState(false);
  const handleProceed = () => {
    if (checked) {
      Alert.alert('Order placed successfully...');
      setCart([0]);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={{marginTop: 20, marginBottom: 60}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 12, alignItems: 'center'}}>
            Do you have a promo code ?
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#08C25D', fontSize: 12}}>Redeem Now</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
            Order total
          </Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
            ₹
            {Math.trunc(
              cart
                .slice(1)
                .map(item => item.price - (item.price * item.discount) / 100)
                .reduce((item1, item2) => item1 + item2, 0),
            )}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
            Delivery fee
          </Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
            ₹20
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
            Total cost
          </Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
            ₹
            {Math.trunc(
              cart
                .slice(1)
                .map(item => item.price - (item.price * item.discount) / 100)
                .reduce((item1, item2) => item1 + item2, 0),
            ) + 20}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 35,
        }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          uncheckedColor="#EBEBEB"
          color="#08C25D"
          size={50}
        />
        <Text
          onPress={() => {
            setChecked(!checked);
          }}
          style={{color: '#A8A8A8', fontSize: 15}}>
          By placing an order you agree to our {'\n'}
          <Text style={{color: 'black', fontWeight: '500'}}>
            Terms
          </Text> and{' '}
          <Text style={{color: 'black', fontWeight: '500'}}>Conditions</Text>
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#08C25D',
            backgroundColor: checked ? '#08C25D' : '#F5F5F5',
            height: 70,
            borderRadius: 11,
          }}
          onPress={handleProceed}>
          <Text
            style={{
              fontWeight: '600',
              color: checked ? 'white' : 'black',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
