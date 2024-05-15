import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartList from '../components/CartList';
import Recommented from '../components/Recommented';
import Delivery from '../components/Delivery';
import DeliveryType from '../components/DeliveryType';
import DeliveryAddress from '../components/DeliveryAddress';
import Bill from '../components/Bill';

export default function Cart({navigation}) {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: 'white',
      }}>
      <CartList />
      <Recommented />
      {/* <Delivery/> */}
      <DeliveryType />
      <DeliveryAddress />
      <Bill navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
